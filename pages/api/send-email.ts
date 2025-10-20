import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { Pool } from "pg";

//Conexión al pool de PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

//Sanitización básica
const cleanText = (text: string) => (text ? text.replace(/[<>]/g, "").trim() : "");

const isValidEmail = (email: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

//Rate limit simple en memoria (por IP)
const windowMs = 60 * 1000;
const maxReq = 5;
const reqMap = new Map<string, { count: number; ts: number }>();
function limited(ip: string): boolean {
  const now = Date.now();
  const rec = reqMap.get(ip);
  if (!rec) {
    reqMap.set(ip, { count: 1, ts: now });
    return false;
  }
  if (now - rec.ts < windowMs) {
    if (rec.count >= maxReq) return true;
    rec.count++;
  } else {
    reqMap.set(ip, { count: 1, ts: now });
  }
  return false;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Método no permitido" });

  const ip = String(req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown");
  if (limited(ip))
    return res.status(429).json({ message: "Demasiadas solicitudes, intente luego." });

  // Extraer y sanear
  const nombre = cleanText(req.body?.nombre);
  const correo = cleanText(req.body?.correo);
  const telefono = cleanText(req.body?.telefono);
  const mensaje = cleanText(req.body?.mensaje);

  // Validación backend
  if (!nombre || !correo || !telefono || !mensaje)
    return res.status(400).json({ message: "Todos los campos son obligatorios." });

  if (!isValidEmail(correo))
    return res.status(400).json({ message: "Correo electrónico no válido." });

  try {
    //Guardar en la base de datos
    await pool.query(
      `INSERT INTO messages (nombre, telefono, correo, mensaje)
       VALUES ($1, $2, $3, $4)`,
      [nombre, telefono, correo, mensaje]
    );

    //Enviar el correo
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    await transporter.sendMail({
      from: `"Atlas de las Niñeces" <no-reply@atlasapp.com>`, 
      to: "nicolelopezsosa@gmail.com",
      replyTo: correo, 
      subject: "Nuevo mensaje desde la página de contacto",
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje}</p>
      `,
    });

    return res
      .status(200)
      .json({ message: "Mensaje guardado y correo enviado correctamente." });
  } catch (err) {
    console.error("Error en send-email:", err);
    return res.status(500).json({ message: "Error al procesar la solicitud." });
  }
}
