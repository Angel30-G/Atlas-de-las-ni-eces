"use client";
import Footer from "@/components/Footer";
import {
  Stack,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { Group } from "@mui/icons-material";
import ProfesorCard from "@/components/ProfesorCard";
import { useTheme } from "@/theme/ThemeProvider";

export default function Credits() {
  const { theme, isSmall } = useTheme();

  const profesores = [
    {
      nombre: "Dr. Jaime Gutiérrez Alfaro",
      unidad:
        "Unidad Desconcentrada Ingeniería en Computación, Centro Académico de Alajuela, ITCR",
      avatar: "/images/profesores/jaime.jpg",
    },
    {
      nombre: "Licda. Claudia Rojas Bravo",
      unidad: "LabComun, ITCR",
      avatar: "/images/profesores/claudia.jpg",
    },
    {
      nombre: "Dra. Rosa Elena Malavassi Aguilar",
      unidad: "Escuela de Arquitectura y Urbanismo, ITCR",
      avatar: "/images/profesores/rosa.jpg",
    },
    {
      nombre: "Arq. Dominique Chang Albizurez",
      unidad: "Escuela de Arquitectura y Urbanismo, ITCR",
      avatar: "/images/profesores/dominique.jpg",
    },
    {
      nombre: "MDU. Arq. Mauricio Guevara Murillo",
      unidad: "Escuela de Arquitectura y Urbanismo, ITCR",
      avatar: "/images/profesores/mauricio.jpg",
    },
    {
      nombre: "Dr. Francisco Mojica Mendieta",
      unidad: "Escuela de Ciencias Sociales, ITCR",
      avatar: "/images/profesores/francisco.jpg",
    },
    {
      nombre: "Arq. Pablo Acuña Quiel",
      unidad:
        "Unidad Desconcentrada Ingeniería en Computación, Centro Académico de Alajuela, ITCR",
      avatar: "/images/profesores/pablo.jpg",
    },
  ];

  const estudiantes = [
    "Isaac Melendez Gatgens",
    "Pablo Sandí Sanchez",
    "Jeaustin Obando Arias",
    "Fernando Vega Valerio",
    "Royner Miranda Segura",
    "Jesus Molina",
    "Valeria Arias Umaña",
    "Ervin Rodriquez Villanueva",
    "Brandon Retana Chacon",
    "Rosa Elena Malavassi Aguilar",
    "Gerald Matarrita Alavarado",
    "José Andrés Vargas Serrano",
  ];

  // Función para generar un ángulo de rotación aleatoria entre -2 y 2 grados
  const getRandomRotation = () => `${(Math.random() * 4 - 2).toFixed(2)}deg`;

  return (
    <>
      <Stack width="100%" spacing={8} alignItems="center" mt={4} mb={4}>
        <Box
          bgcolor={theme.background}
          py={4}
          px={2}
          borderRadius={4}
          sx={{
            width: {
              xs: "95%",
              sm: "90%",
              md: "75%",
            },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            color={theme.text2}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "center",
              marginBottom: 4,
              fontWeight: "bold",
            }}
          >
            Profesores
          </Typography>
          <Stack
            flexDirection="row"
            flexWrap="wrap"
            gap={6}
            justifyContent="center"
            alignItems="center"
          >
            {profesores.map((profesor, index) => (
              <ProfesorCard profesor={profesor} key={index} />
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            width: {
              xs: "95%",
              sm: "90%",
              md: "75%",
            },
          }}
          bgcolor={theme.background}
          py={4}
          px={2}
          borderRadius={4}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            color={theme.text2}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "center",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            Estudiantes del TEC
          </Typography>
          <Stack
            flexDirection="row"
            flexWrap="wrap"
            gap={4}
            justifyContent="center"
            alignItems="center"
          >
            {estudiantes.map((estudiante, index) => (
              <Card
                key={index}
                sx={{
                  width: 260,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: 1,
                  cursor: "pointer",
                  borderRadius: 2,
                  boxShadow: "none",
                  bgcolor: "white",
                  transform: `rotate(${getRandomRotation()})`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px) scale(1.02)",
                    boxShadow: `0px 0px 20px ${theme.primary}`,
                  },
                }}
              >
                <Typography
                  variant="body1"
                  textAlign="center"
                  fontWeight="medium"
                  color={theme.text2}
                  sx={{
                    transition: "color 0.3s ease",
                  }}
                >
                  {estudiante}
                </Typography>
              </Card>
            ))}
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
