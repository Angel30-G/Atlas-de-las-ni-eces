"use client";
import { Box, Stack, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@/theme/ThemeProvider";

export default function AboutUs() {
  const { theme, isSmall } = useTheme();

  return (
    <Box
      width="100%"
      minHeight="83vh"
      px={{ xs: 3, md: 6 }}
      py={{ xs: 6, md: 10 }}
      bgcolor={theme.primary}
      display="flex"
      justifyContent="center"
      mb={2}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        width={{ xs: "100%", md: "80%" }}
        boxShadow={4}
        p={4}
        borderRadius={4}
        bgcolor={theme.background}
        spacing={4}
        position="relative"
      >
        {/* Texto a la izquierda */}
        <Stack spacing={2} flex={1} mt={{ xs: 6, md: 0 }}>
          <Typography
            variant={isSmall ? "h4" : "h3"}
            fontWeight="bold"
            color={theme.text2}
          >
            Sobre Nosotros
          </Typography>

          <Divider sx={{ width: 80, borderColor: theme.secondary }} />

          <Typography
            variant={isSmall ? "body1" : "h6"}
            fontWeight={400}
            color="text.secondary"
          >
            Somos un equipo interdisciplinario comprometido con la
            transformación urbana participativa. Trabajamos en conjunto con
            comunidades locales para mapear, comprender y visibilizar sus
            entornos.
          </Typography>

          <Typography
            variant={isSmall ? "body1" : "h6"}
            fontWeight={400}
            color="text.secondary"
          >
            Fomentamos especialmente la participación activa de{" "}
            <strong>niñas y niños</strong> en procesos de planificación,
            reconociendo sus voces, vivencias y conocimientos como esenciales
            para construir ciudades más humanas, justas y significativas.
          </Typography>
        </Stack>

        <Box
          flex={1}
          maxWidth={{ xs: "100%", sm: 400, md: 450 }}
          height="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          sx={{
            borderTopRightRadius: 30,
            borderBottomLeftRadius: 30,
            borderTop: `6px solid ${theme.primary}`,
            borderRight: `6px solid ${theme.secondary}`,
            overflow: "hidden",
            aspectRatio: "4/3",
          }}
        >
          <Image
            src="/assets/images/AboutUs.jpg"
            alt="Equipo de trabajo en campo"
            layout="fill"
            objectFit="cover"
          />
        </Box>

        <Image
          src="/assets/vectors/idea.svg"
          alt="idea"
          width={isSmall ? 70 : 100}
          height={isSmall ? 70 : 100}
          style={{
            position: "absolute",
            top: -40,
            right: -30,
            transform: "rotate(21deg)",
          }}
        />
      </Stack>
    </Box>
  );
}
