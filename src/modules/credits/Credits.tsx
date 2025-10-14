"use client";

import Image from "next/image";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Button,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useTheme } from "@/theme/ThemeProvider";

type Person = { nombre: string };

function PersonTile({ nombre }: { nombre: string }) {
  return (
    <Stack alignItems="center" gap={1.5} sx={{ width: 160 }}>
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src="/Avatar.png"
          alt={nombre}
          fill
          sizes="100px"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 700,
          textAlign: "center",
          letterSpacing: 0.3,
          textTransform: "uppercase",
        }}
      >
        {nombre}
      </Typography>
    </Stack>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <Box sx={{ width: { xs: "90%", md: "80%" } }}>
      <Typography
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: 900,
          letterSpacing: 1,
          mb: 4,
          fontSize: { xs: 20, md: 24 },
          textTransform: "uppercase",
          color: theme.primary,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function Credits() {
  const { theme } = useTheme();

  const profesores: Person[] = [
    { nombre: "PROF. LOREM IPSUM" },
    { nombre: "PROF. LOREM IPSUM" },
    { nombre: "PROF. LOREM IPSUM" },
    { nombre: "PROF. LOREM IPSUM" },
  ];

  const estudiantes: Person[] = [
    { nombre: "LOREM IPSUM" },
    { nombre: "LOREM IPSUM" },
    { nombre: "LOREM IPSUM" },
  ];

  return (
    <Stack
      width="100%"
      alignItems="center"
      sx={{
        bgcolor: "#FFF9F1",
        py: { xs: 4, md: 8 },
        gap: { xs: 6, md: 10 },
      }}
    >
      {/* PROFESORES */}
      <Section title="PROFESORES">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            justifyContent: "center",
            "& > *": {
              flex: { xs: "0 0 calc(50% - 20px)", sm: "0 0 calc(25% - 20px)" },
              maxWidth: { xs: "calc(50% - 20px)", sm: "calc(25% - 20px)" },
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          {profesores.map((p, i) => (
            <Box key={i}>
              <PersonTile nombre={p.nombre} />
            </Box>
          ))}
        </Box>
      </Section>

      {/* ESTUDIANTES */}
      <Section title="ESTUDIANTES">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            justifyContent: "center",
            "& > *": {
              flex: { xs: "0 0 calc(50% - 20px)", sm: "0 0 calc(25% - 20px)" },
              maxWidth: { xs: "calc(50% - 20px)", sm: "calc(25% - 20px)" },
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          {estudiantes.map((e, i) => (
            <Box key={i}>
              <PersonTile nombre={e.nombre} />
            </Box>
          ))}
        </Box>
      </Section>

      {/* NIÑOS Y NIÑAS PARTICIPANTES */}
      <Section title="NIÑOS Y NIÑAS PARTICIPANTES">
        <Stack alignItems="center" gap={3}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 900,
              position: "relative", // ancla del monito
              mx: "auto",
            }}
          >
            {/* Caja de la foto con overflow hidden (esquinas redondeadas) */}
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",               
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                position: "relative",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src="/ninos.png"
                alt="Niños y niñas participantes"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                style={{ objectFit: "cover" }}
              />

              {/* Flechas  */}
              <IconButton
                size="small"
                sx={{ position: "absolute", left: 8, top: "calc(50% - 16px)", bgcolor: "white" }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{ position: "absolute", right: 8, top: "calc(50% - 16px)", bgcolor: "white" }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* Monito: hermano del cuadro de la foto, absoluto al WRAPPER */}
            <Box
              sx={{
                position: "absolute",
                right: { xs: -24, sm: -36, md: -48 }, 
                bottom: { xs: -6, sm: -8, md: -10 },
                width: { xs: 84, sm: 110, md: 140 },
                pointerEvents: "none",
                zIndex: 2,
                filter: "drop-shadow(0 6px 10px rgba(0,0,0,.25))",
              }}
            >
              <Image
                src="/saludando.png"
                alt="Personaje saludando"
                width={200}
                height={200}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </Box>
          </Box>

          {/* Dots */}
          <Stack direction="row" alignItems="center" gap={2}>
            <RadioButtonCheckedIcon fontSize="small" />
            <RadioButtonUncheckedIcon fontSize="small" />
            <RadioButtonUncheckedIcon fontSize="small" />
          </Stack>

          {/* Botón explorar */}
          <Stack direction="row" gap={4}>
            <Button
              startIcon={<PlayCircleOutlineIcon />}
              variant="text"
              sx={{ textTransform: "none", fontWeight: 700 }}
            >
              explorar
            </Button>

          </Stack>
        </Stack>
      </Section>
    </Stack>
  );
}
