"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@/theme/ThemeProvider";

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
            Es resultado de un proyecto de extensión universitaria del Tecnológico de
            Costa Rica (TEC) que busca visibilizar cómo las infancias perciben y
            experimentan el territorio que habitan. Frente a un modelo de planificación
            históricamente adultocéntrico, este proyecto propone una ruptura simbólica
            al reconocer a niñas y niños como sujetos activos con capacidad de análisis,
            opinión y propuesta sobre los espacios que habitan.
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
            gap: 0,
            alignItems: "stretch",
          }}
        >
          {/* Izquierda: tarjeta con degradado */}
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 4, lg: 5 },
              backgroundImage: `linear-gradient(90deg, ${hexToRgba(theme.primary, 0.95)} 0%, ${hexToRgba(
                theme.primary,
                0.55
              )} 52%, ${hexToRgba(theme.primary, 0.18)} 100%)`,
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
              Somos un equipo interdisciplinario comprometido con la transformación
              urbana participativa. Trabajamos en conjunto con comunidades locales
              para mapear, comprender y visibilizar sus entornos.
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
              Fomentamos especialmente la participación activa de niñas y niños en
              procesos de planificación, reconociendo sus voces, vivencias y
              conocimientos como esenciales para construir ciudades más humanas,
              justas y significativas.
            </Typography>
          </Box>

          {/* Derecha: imagen */}
          <Box
            sx={{
              position: "relative",
              minHeight: { xs: 240, md: 380 },
              borderRadius: { xs: "0 0 24px 24px", md: "0 28px 28px 0" },
              overflow: "hidden",
              boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
            }}
          >
            <Image
              src="/assets/heroImages/Hero8.jpg"
              alt="Equipo de trabajo en campo"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
        </Box>
      </Box>

      {/* ================= ACTIVIDADES / METODOLOGÍA / LOGROS ================= */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        justifyContent="center"
        alignItems="stretch"
        maxWidth="1200px"
        mx="auto"
        px={3}
        mb={12}
      >
        <Feature
          title="ACTIVIDADES"
          image="/assets/heroImages/nosotros1.jpg"
          text="A través de talleres participativos realizados en escuelas públicas de distintas localidades del país, facilitados por población estudiantil del TEC junto a personas extensionistas y docentes."
          color={theme.primary}
        />
        <Feature
          title="METODOLOGÍA"
          image="/assets/heroImages/nosotros3.jpg"
          text="La metodología utilizada se basa en el mapeo participativo o cartografía social, una herramienta crítica que permite a las comunidades representar colectivamente su experiencia territorial."
          color={theme.primary}
        />
        <Feature
          title="LOGROS"
          image="/assets/heroImages/nosotros2.jpg"
          text="Se recopilan mapas, dibujos y narrativas creadas por niños y niñas entre los 9 y 10 años, que reflejan sus vivencias, preocupaciones, deseos y vínculos con el espacio público."
          color={theme.primary}
        />
      </Stack>
    </Box>
  );
}

/* ======= Componente auxiliar ======= */
function Feature({
  title,
  image,
  text,
  color,
}: {
  title: string;
  image: string;
  text: string;
  color: string;
}) {
  return (
    <Stack flex={1} spacing={2} alignItems="flex-start">
      <Typography variant="h5" fontWeight={700} sx={{ textTransform: "uppercase", color }}>
        {title}
      </Typography>

      <Box
        sx={{
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
          width: "100%",
          height: 200,
          boxShadow: 2,
        }}
      >
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </Box>

      <Typography variant="body2" color="text.primary" lineHeight={1.6}>
        {text}
      </Typography>
    </Stack>
  );
}
