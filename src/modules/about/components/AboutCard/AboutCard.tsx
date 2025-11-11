"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@/theme/ThemeProvider";
import ImageCard from "@/modules/start/components/ImageCard/ImageCard";

/* Helper: HEX → RGBA */
function hexToRgba(hex: string, alpha = 1) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(
    clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean,
    16
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function AboutUs() {
  const { theme, isSmall } = useTheme();

  return (
    <Box width="100%" fontFamily="'Josefin Sans', sans-serif">
      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          backgroundColor: theme.primary,
          color: "white",
          py: { xs: 10, md: 14 },
          px: 3,
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Estrella */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "-14%", md: "-17%" },
            left: { xs: "-7%", md: "-3%" },
            width: { xs: "38%", md: "26%" },
            aspectRatio: "1 / 1",
            opacity: 0.9,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 1,
            filter:
              "brightness(0) saturate(100%) invert(90%) sepia(4%) saturate(350%) hue-rotate(175deg) brightness(100%) contrast(95%)",
          }}
        >
          <img
            src="/Vector3.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          />
        </Box>

        {/* Garabato */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "-8%", md: "-10%" },
            right: { xs: "1%", md: "-9%" },
            width: { xs: "72%", md: "48%" },
            aspectRatio: "3 / 1",
            opacity: 0.9,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 1,
            filter:
              "brightness(0) saturate(100%) invert(90%) sepia(4%) saturate(350%) hue-rotate(175deg) brightness(100%) contrast(95%)",
          }}
        >
          <img
            src="/Vector4.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          />
        </Box>

        {/* Título y texto */}
        <Stack
          spacing={3}
          alignItems="center"
          maxWidth="1000px"
          mx="auto"
          position="relative"
          zIndex={2}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: 800,
              letterSpacing: "0.03em",
              lineHeight: 1.1,
              textTransform: "uppercase",
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem", lg: "4rem" },
            }}
          >
            ATLAS DE LAS NIÑECES
          </Typography>

          <Typography
            component="p"
            sx={{
              maxWidth: "860px",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.8,
              color: "white",
              textAlign: "center",
              fontWeight: 300,
            }}
          >
            El Atlas de las Niñeces es un proyecto de extensión universitaria del Instituto Tecnológico de Costa Rica (TEC), desarrollado desde el Laboratorio de Comunidades y Computación (LabComún) de la sede del TEC en Alajuela. Este espacio impulsa la articulación entre extensión e investigación, promoviendo el intercambio y la construcción colectiva de conocimiento entre la universidad pública y su entorno social, económico y cultural. 
          </Typography>
        </Stack>
      </Box>

      {/* ================= ¿QUIÉNES SOMOS? ================= */}
      <Box sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            alignItems: "stretch",
            justifyItems: { xs: "center", md: "stretch" }, // centrado en móvil
            rowGap: { xs: 3, md: 0 },
          }}
        >
          {/* Izquierda: tarjeta con degradado */}
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 4, lg: 5 },
              backgroundImage: `linear-gradient(90deg, ${hexToRgba(
                theme.primary,
                0.95
              )} 0%, ${hexToRgba(theme.primary, 0.55)} 52%, ${hexToRgba(
                theme.primary,
                0.18
              )} 100%)`,
              color: hexToRgba("#1E2A39", 0.9),
              borderRadius: { xs: "24px 24px 0 0", md: "28px 0 0 28px" },
              boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
              minHeight: { xs: 320, md: 380 },
            }}
          >
            <Typography
              variant={isSmall ? "h4" : "h3"}
              sx={{
                fontWeight: 800,
                color: hexToRgba("#133E74", 0.9),
                mb: { xs: 2, md: 3 },
                textTransform: "uppercase",
                letterSpacing: "0.02em",
              }}
            >
              ¿Quiénes somos?
            </Typography>

            <Typography
              sx={{
                color: hexToRgba("#0B1A2B", 0.85),
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: "52ch",
              }}
            >
              El proyecto busca visibilizar las percepciones, experiencias y deseos de las infancias en torno al territorio y el espacio público, integrando herramientas tecnológicas y metodologías participativas para fomentar la reflexión comunitaria sobre la ciudad y su gestión. 

Desde un enfoque de software libre, datos abiertos y investigación-acción participativa, el Atlas de las Niñeces propone una forma distinta de mirar el territorio, desde las voces y los mapas que las niñas y los niños construyen. 

            </Typography>

            <Typography
              sx={{
                mt: 2.5,
                color: hexToRgba("#0B1A2B", 0.85),
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: "62ch",
              }}
            >
             Además, constituye una plataforma de aprendizaje para las personas estudiantes de la carrera de Ingeniería en Computación, quienes participan en el diseño y desarrollo de herramientas tecnológicas con sentido social, fortaleciendo su formación integral y su compromiso con la realidad local. 
            </Typography>
          </Box>

          {/* Derecha: imagen con proporción estable */}
          <Box
            sx={{
              position: "relative",
              aspectRatio: { xs: "16 / 10", md: "4 / 3" },
              borderRadius: { xs: "0 0 24px 24px", md: "0 28px 28px 0" },
              overflow: "hidden",
              boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
              width: "100%",
            }}
          >
            <Image
              src="/assets/heroImages/Hero8.jpg"
              alt="Equipo de trabajo en campo"
              fill
              sizes="(max-width: 900px) 100vw, 600px"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </Box>
        </Box>
      </Box>

      {/* ================= ACTIVIDADES / METODOLOGÍA / LOGROS ================= */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 8, md: 6 }}
        alignItems={{ xs: "center", md: "stretch" }}
        justifyContent="center"
        sx={{ width: "100%", maxWidth: "1200px", mx: "auto", px: { xs: 2, md: 3 }, mb: { xs: 10, md: 12 } }}
      >
        <ImageCard
          title="ACTIVIDADES"
          description="A través de talleres participativos realizados en escuelas públicas de distintas localidades del país, facilitados por población estudiantil del TEC junto a personas extensionistas y docentes."
          image="/Actividades.png"
        />
        <ImageCard
          title="METODOLOGÍA"
          description="La metodología utilizada se basa en el mapeo participativo o cartografía social, una herramienta crítica que permite a las comunidades representar colectivamente su experiencia territorial."
          image="/Metodologia.png"
        />
        <ImageCard
          title="LOGROS"
          description="Se recopilan mapas, dibujos y narrativas creadas por niños y niñas entre los 9 y 10 años, que reflejan sus vivencias, preocupaciones, deseos y vínculos con el espacio público."
          image="/Logros.png"
        />
      </Stack>
    </Box>
  );
}
