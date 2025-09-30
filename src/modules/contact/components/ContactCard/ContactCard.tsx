"use client";

import { Box, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import ContactInput from "../ContactInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@/theme/ThemeProvider"; 

export default function ContactCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { theme, isSmall } = useTheme(); 

  const onSubmit = async (data: any) => {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success("Mensaje enviado");
    } else {
      toast.error("Error al enviar el mensaje");
    }
  };

  return (
    <Box
      width="100%"
      minHeight="84vh"
      bgcolor={theme.background} 
      px={{ xs: 3, md: 10 }}
      py={{ xs: 6, md: 10 }}
      display="flex"
      flexDirection="column"
    >
      {/* Título */}
      <Typography 
        variant="h4" 
        fontWeight="bold" 
        color={theme.primary} 
        mb={2}
      >
        CONTÁCTANOS
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* grid container */}
        <Box
          component="div"
          sx={{
            display: "grid",
            gap: 3,
            // 1 columna en mobile, 2 columnas en md+
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          }}
        >
          {/* Nombre */}
          <Box>
            <ContactInput
              type="text"
              label="NOMBRE"
              name="nombre"
              register={register}
              error={errors.nombre}
            />
          </Box>

          {/* Teléfono */}
          <Box>
            <ContactInput
              type="text"
              label="NÚMERO DE TELÉFONO"
              name="telefono"
              register={register}
              error={errors.telefono}
            />
          </Box>

          {/* Correo */}
          <Box>
            <ContactInput
              type="email"
              label="CORREO ELECTRÓNICO"
              name="correo"
              register={register}
              error={errors.correo}
            />
          </Box>

          {/* Mensaje: ocupa las 2 columnas en md+ */}
          <Box sx={{ gridColumn: { md: "1 / 3" } }}>
            <ContactInput
              type="area"
              label="MENSAJE"
              name="mensaje"
              register={register}
              error={errors.mensaje}
            />
          </Box>
        </Box>

        {/* Botón enviar */}
        <Box mt={4} textAlign="right">
          <Button
            type="submit"
            variant="text"
            sx={{
              color: theme.secondary, 
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              "&:hover": { 
                color: theme.primary, 
                backgroundColor: "transparent" 
              },
            }}
          >
            enviar →
          </Button>
        </Box>
      </form>

      {/* Toast */}
      <ToastContainer position="bottom-right" autoClose={4000} />
    </Box>
  );
}