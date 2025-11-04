"use client";

import { Box, Button, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@/theme/ThemeProvider";
import ContactInput from "../ContactInput";

type FormValues = {
  nombre: string;
  telefono: string;
  correo: string;
  mensaje: string;
};

export default function ContactCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const { theme } = useTheme();

  const onSubmit = async (data: FormValues) => {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      toast.success("Mensaje enviado correctamente");
      reset();
    } else {
      toast.error("Error al enviar el mensaje");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "84vh",
        bgcolor: theme.background,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 3, md: 8, lg: 12 },
        py: { xs: 6, md: 10 },
        overflow: "hidden",
      }}
    >
      {/* Fondo de ilustraciones a la derecha */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: { md: "35%", lg: "33%" },
          display: { xs: "none", md: "block" },
          pointerEvents: "none",
          overflow: "visible",
          zIndex: 1,
        }}
      >
        {/* Sol */}
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: "85%",
            aspectRatio: "1 / 1",
            backgroundImage: "url(/Vector-2.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            zIndex: 1,
          }}
        />

        {/* Dibujito */}
        <Box
          sx={{
            position: "absolute",
            right: "1%", 
            top: "50%",
            transform: "translateY(-50%)",
            width: "32%",
            aspectRatio: "224 / 314",
            backgroundImage: "url(/Vector-3.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            zIndex: 2,
          }}
        />
      </Box>

      {/* Formulario*/}
      <Box
        sx={{
          width: { xs: "100%", md: "65%" },
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            letterSpacing: "0.02em",
            color: theme.primary,
            mb: 3,
          }}
        >
          CONTÁCTANOS
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            }}
          >
            {/* Nombre */}
            <ContactInput
              label="NOMBRE"
              type="text"
              name="nombre"
              register={register}
              error={errors.nombre}
              rules={{
                required: "El nombre es obligatorio",
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                  message: "Solo se permiten letras y espacios",
                },
                maxLength: {
                  value: 50,
                  message: "Máximo 50 caracteres",
                },
              }}
            />

            {/* Teléfono */}
            <ContactInput
              label="NÚMERO DE TELÉFONO"
              type="text"
              name="telefono"
              register={register}
              error={errors.telefono}
              rules={{
                required: "El número de teléfono es obligatorio",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Solo se permiten números",
                },
                maxLength: {
                  value: 8,
                  message: "Máximo 8 dígitos",
                },
              }}
            />

            {/* Correo */}
            <ContactInput
              label="CORREO ELECTRÓNICO"
              type="email"
              name="correo"
              register={register}
              error={errors.correo}
              rules={{
                required: "El correo electrónico es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Ingrese un correo válido",
                },
                maxLength: {
                  value: 100,
                  message: "Máximo 100 caracteres",
                },
              }}
            />

            {/* Mensaje */}
            <Box sx={{ gridColumn: { md: "1 / 3" } }}>
              <ContactInput
                label="MENSAJE"
                type="area"
                name="mensaje"
                register={register}
                error={errors.mensaje}
                rules={{
                  required: "El mensaje es obligatorio",
                  maxLength: {
                    value: 500,
                    message: "Máximo 500 caracteres",
                  },
                }}
              />
            </Box>
          </Box>

          {/* Botón enviar */}
          <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="text"
              sx={{
                fontWeight: 800,
                textTransform: "lowercase",
                fontSize: "2.1rem",
                color: theme.primary,
                gap: 1,
                "&:hover": { opacity: 0.9, background: "transparent" },
              }}
              endIcon={
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "999px",
                    border: `3px solid ${theme.primary}`,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <ArrowForwardRoundedIcon fontSize="small" />
                </Box>
              }
            >
              enviar
            </Button>
          </Box>
        </form>
      </Box>

      <ToastContainer position="bottom-right" autoClose={4000} />
    </Box>
  );
}
