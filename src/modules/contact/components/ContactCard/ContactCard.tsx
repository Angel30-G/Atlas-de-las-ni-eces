"use client";

import { Stack, Box, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import ContactInput from "../ContactInput";
import { useTheme } from "@/theme/ThemeProvider";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

export default function ContactCard() {
  const { theme, isSmall } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      bgcolor={theme.surface}
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={2}
      py={8}
    >
      <Box
        width="100%"
        maxWidth={700}
        bgcolor={"white"}
        borderRadius={4}
        p={{ xs: 4, md: 6 }}
        display="flex"
        flexDirection="column"
        gap={4}
        position="relative"
      >
        <Image
          src="/assets/vectors/mail.svg"
          alt="mail"
          width={isSmall ? 70 : 100}
          height={isSmall ? 70 : 100}
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            transform: "rotate(21deg)",
          }}
        />

        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color={theme.text2}
        >
          Contáctanos
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <ContactInput
              type="text"
              label="Nombre"
              name="nombre"
              register={register}
              error={errors.nombre}
            />
            <ContactInput
              type="email"
              label="Correo electrónico"
              name="correo"
              register={register}
              error={errors.correo}
            />
            <ContactInput
              type="text"
              label="Número de teléfono"
              name="telefono"
              register={register}
              error={errors.telefono}
            />
            <ContactInput
              type="area"
              label="Mensaje"
              name="mensaje"
              register={register}
              error={errors.mensaje}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: theme.primary,
                color: theme.text1,
                fontWeight: "bold",
                py: 1.5,
                borderRadius: "6px",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: theme.secondary,
                },
              }}
            >
              Enviar mensaje
            </Button>
          </Stack>
        </form>
      </Box>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
}
