"use client";
import { Box, Stack, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@/theme/ThemeProvider";

export default function AboutUs() {
  const { theme, isSmall } = useTheme();

  return (
 <Box
      width="100%"
      minHeight="100vh"
      bgcolor={theme.background}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {/* Hero Section - Título y descripción principal */}

      <Box
        width="100%"
        minHeight="70vh"
        bgcolor={theme.primary}
        display="flex"
        alignItems="center"
        justifyContent="center" 
      >
      <Stack
        spacing={3}
        width="100%"
        maxWidth="1200px"
        textAlign="center"
        mb={8}
      >
        <Typography
          variant={isSmall ? "h3" : "h1"}
          fontWeight="bold"
          color="white"
        >
          ATLAS DE LAS NIÑECES
        </Typography>
        
        <Typography
          variant={isSmall ? "body1" : "h5"}
          color="white"
          lineHeight={1.5}
          width="100%"
        >
          Es resultado de un proyecto de extensión universitaria del Tecnológico 
          de Costa Rica (TEC) que busca visibilizar cómo las infancias perciben 
          y experimentan el territorio que habitan. Frente a un modelo de 
          planificación históricamente adultocéntrico, este proyecto propone una 
          ruptura simbólica al reconocer a niños y niñas como sujetos activos 
          con capacidad de análisis, opinión y propuesta sobre los espacios que 
          habitan.
        </Typography>
      </Stack>
      </Box>

      {/* Sección Quiénes Somos */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        maxWidth="1400px"
        minHeight="400px"
        boxShadow={4}
        p={4}
        borderRadius={2}
        bgcolor={theme.surface}
        spacing={4}
        position="relative"
        mb={8}
        mt={10}
      >
        {/* Texto a la izquierda */}
        <Stack spacing={2} flex={1} justifyContent="center"> 
          <Typography
            variant={isSmall ? "h4" : "h3"}
            fontWeight="bold"
            color={theme.primary}
          >
            ¿QUIÉNES SOMOS?
          </Typography>

          <Divider sx={{ width: 80, borderColor: theme.secondary, borderWidth: 2 }} />

          <Typography
            variant={isSmall ? "body1" : "h6"}
            fontWeight={400}
            color={theme.text2}
            lineHeight={1.7}
          >
            Somos un equipo interdisciplinario comprometido con la
            transformación urbana participativa. Trabajamos en conjunto con
            comunidades locales para mapear, comprender y visibilizar sus
            entornos.
          </Typography>

          <Typography
            variant={isSmall ? "body1" : "h6"}
            fontWeight={400}
            color={theme.text2}
            lineHeight={1.7}
          >
            Fomentamos especialmente la participación activa de{" "}
            <strong>niñas y niños</strong> en procesos de planificación,
            reconociendo sus voces, vivencias y conocimientos como esenciales
            para construir ciudades más humanas, justas y significativas.
          </Typography>
        </Stack>

        {/* Imagen a la derecha */}
        <Box
          flex={1}
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          sx={{
            overflow: "hidden",
            aspectRatio: "4/4",
          }}
        >
          <Image
            src="/assets/heroImages/Hero8.jpg"
            alt="Equipo de trabajo en campo"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Elemento decorativo */}
       {/*} 
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
        */}

      </Stack>

      {/* Sección Brochure */}
      <Box
        width="100%"
        maxWidth="1200px"
        textAlign="center"
        p={4}
      >  
      </Box>
    </Box>
  );
}