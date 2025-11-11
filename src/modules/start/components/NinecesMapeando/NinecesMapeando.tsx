"use client";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import Hero from "@/modules/start/components/Hero";
import Image from "next/image";

const titleStyles = {
  fontFamily: "'Josefin Sans', sans-serif",
  fontWeight: 700,
  fontSize: { xs: "22px", md: "28px" },
  letterSpacing: "1px",
  mb: { xs: 3, md: 4 },
};

const subtitleStyles = {
  fontWeight: 700,
  fontSize: { xs: "14px", md: "16px" },
  mb: 1,
  fontFamily: "'Josefin Sans', sans-serif",
};

const bodyTextStyles = {
  color: "#404040",
  fontFamily: "'Josefin Sans', sans-serif",
  lineHeight: 1.6,
};

export default function NinecesMapeando() {
  const { theme } = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography component="h2" sx={{ ...titleStyles, color: theme.primary }}>
        NIÑECES MAPEANDO
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        {/* Izquierda: carrusel */}
        <Box sx={{ width: { xs: "100%", md: "58.3%" }, position: "relative" }}>
          <Hero minimal height={{ xs: 260, md: 420 }} />

          {/* Circulos apilados*/}
          <Box
            sx={{
              position: "absolute",
              left: { md: -117, lg: -127 },
              bottom: { md: -10, lg: 0 },
              display: { xs: "none", md: "block" },
              pointerEvents: "none",
            }}
          >
            <Image
              src="/apilado.PNG"
              alt="Iconos apilados"
              width={190}
              height={370}
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>

          {/* Bicho con lupa */}
          <Box
            sx={{
              position: "absolute",
              right: { md: -56, lg: -64 },
              bottom: { md: -36, lg: -42 },
              display: { xs: "none", md: "block" },
              pointerEvents: "none",
            }}
          >
            <Image
              src="/bicho-lupa.png"
              alt="Bicho con lupa"
              width={150}
              height={150}
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
        </Box>

        {/* Derecha: texto descriptivo */}
        <Box sx={{ width: { xs: "100%", md: "41.7%" } }}>
          <Typography sx={subtitleStyles}>SOBRE LA DINÁMICA</Typography>
          <Typography sx={bodyTextStyles}>
            Es resultado de un proyecto de extensión universitaria del Tecnológico de
            Costa Rica (TEC) que busca visibilizar cómo las infancias perciben y
            experimentan el territorio que habitan. Frente a un modelo de planificación
            históricamente adultocéntrico, este proyecto propone una ruptura simbólica al
            reconocer a niños y niñas como sujetos activos con capacidad de análisis,
            opinión y propuesta sobre los espacios que habitan.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
