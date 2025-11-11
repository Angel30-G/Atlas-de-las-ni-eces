"use client";

import Image from "next/image";
import {
  Box,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useTheme } from "@/theme/ThemeProvider";

type Person = { nombre: string; rol?: string };

function PersonTile({
  nombre,
  rol,
  imgSrc,
}: {
  nombre: string;
  rol?: string;
  imgSrc: string;
}) {
  return (
    <Stack alignItems="center" gap={0.25} sx={{ width: { xs: 280, md: 320 } }}>
      {/* Icono */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "1/1",
          overflow: "hidden",
          clipPath: {
            xs: "inset(0 0 8% 0)",  
            md: "inset(0 0 12% 0)", 
          },
        }}
      >
        <Image
          src={imgSrc}
          alt={nombre}
          fill
          sizes="(max-width: 600px) 280px, 320px"
          style={{ objectFit: "contain", objectPosition: "center bottom" }}
          priority={false}
        />
      </Box>

      {/* Nombre */}
      <Typography
        variant="body2"
        sx={{
          fontWeight: 1200,
          textAlign: "center",
          letterSpacing: 0.3,
          textTransform: "none",
          fontSize: { xs: 23, md: 26 },
          mt: -8,
        }}
      >
        {nombre}
      </Typography>

      {/* Rol */}
      {rol && (
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            letterSpacing: 0.2,
            color: "#444",
            fontSize: { xs: 13, md: 15 },
            mt: 0.5,
          }}
        >
          {rol}
        </Typography>
      )}
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
          fontSize: { xs: 22, md: 28 },
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

  // Equipo de trabajo (nombre + rol)
  const equipo: Person[] = [
    { nombre: "Claudia Rojas Bravo", rol: "Coordinadora y extensionista" },
    { nombre: "Jaime Gutiérrez Alfaro", rol: "Extensionista" },
    { nombre: "Shi Alarcón-Zamora", rol: "Extensionista" },
    { nombre: "Mauricio Guevara Murillo", rol: "Extensionista" },
  ];

  const estudiantes: Person[] = [
    { nombre: "LOREM IPSUM" },
    { nombre: "LOREM IPSUM" },
    { nombre: "LOREM IPSUM" },
    { nombre: "LOREM IPSUM" },
  ];

  const alternateImage = (i: number) => (i % 2 === 0 ? "/cred1.PNG" : "/cred2.PNG");

  return (
    <Stack
      width="100%"
      alignItems="center"
      sx={{
        bgcolor: "theme.background",
        py: { xs: 4, md: 8 },
        gap: { xs: 6, md: 10 },
      }}
    >
      {/* EQUIPO DE TRABAJO */}
      <Section title="EQUIPO DE TRABAJO">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            justifyContent: "center",
            "& > *": {
              flex: { xs: "0 0 calc(50% - 24px)", sm: "0 0 calc(25% - 24px)" },
              maxWidth: { xs: "calc(50% - 24px)", sm: "calc(25% - 24px)" },
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          {equipo.map((p, i) => (
            <Box key={`equipo-${i}`}>
              <PersonTile nombre={p.nombre} rol={p.rol} imgSrc={alternateImage(i)} />
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
            gap: 6,
            justifyContent: "center",
            "& > *": {
              flex: { xs: "0 0 calc(50% - 24px)", sm: "0 0 calc(25% - 24px)" },
              maxWidth: { xs: "calc(50% - 24px)", sm: "calc(25% - 24px)" },
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          {estudiantes.map((e, i) => (
            <Box key={`est-${i}`}>
              <PersonTile nombre={e.nombre} imgSrc={alternateImage(i)} />
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
              position: "relative",
              mx: "auto",
            }}
          >
            {/* ASTER */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: -180, md: -260 },
                top: { xs: 60, md: 40 },
                width: { xs: 420, md: 640 }, 
                zIndex: 0,
                pointerEvents: "none",
                opacity: 2, 
                backgroundColor: theme.secondary,
                WebkitMaskImage: "url(/Aster.svg)",
                maskImage: "url(/Aster.svg)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                filter: "drop-shadow(0 12px 25px rgba(0,0,0,.12))",
                aspectRatio: "1 / 1", 
              }}
            />

            {/* Foto principal */}
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                position: "relative",
                aspectRatio: "16/9",
                zIndex: 1, 
              }}
            >
              <Image
                src="/ninos.png"
                alt="Niños y niñas participantes"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                style={{ objectFit: "cover" }}
              />
            </Box>

            {/* Bichito derecha */}
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
