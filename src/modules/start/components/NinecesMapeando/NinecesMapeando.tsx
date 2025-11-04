"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import Hero from "@/modules/start/components/Hero";

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
      <Typography
        component="h2"
        sx={{ 
          ...titleStyles, 
          color: theme.primary 
        }}
      >
        NIÑECES MAPEANDO
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'flex-start'
        }}
      >
        {/* Izquierda: carrusel*/}
        <Box sx={{ width: { xs: '100%', md: '58.3%' } }}>
          <Hero minimal height={{ xs: 260, md: 420 }} />
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#C5C5C5" }} />
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#C5C5C5" }} />
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#3A3A3A" }} />
          </Stack>
        </Box>

        {/* Derecha: texto descriptivo */}
        <Box sx={{ width: { xs: '100%', md: '41.7%' } }}>
          <Typography sx={subtitleStyles}>
            SOBRE LA DINÁMICA
          </Typography>
          <Typography sx={bodyTextStyles}>
            Es resultado de un proyecto de extensión universitaria del Tecnológico
            de Costa Rica (TEC) que busca visibilizar cómo las infancias perciben
            y experimentan el territorio que habitan. Frente a un modelo de
            planificación históricamente adultocéntrico, este proyecto propone una
            ruptura simbólica al reconocer a niños y niñas como sujetos activos
            con capacidad de análisis, opinión y propuesta sobre los espacios que
            habitan.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}