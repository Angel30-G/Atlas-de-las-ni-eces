import { Typography, Stack, Box } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import CardWithImage from "@/components/CardWithImage";
import Image from "next/image";

export default function Areas() {
  const { theme, isSmall } = useTheme();

  return (
    <Stack bgcolor={theme.primary} pt={4} alignItems="center">
      <Stack
        bgcolor="white"
        my={10}
        alignItems="center"
        position="relative"
        p={4}
        sx={{
          borderRadius: 5,
          boxShadow: 6,
          width: {
            xs: "95%",
            sm: "90%",
            md: "75%",
          },
          maxWidth: "1200px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 400,
            borderRadius: 5,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: 5,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "relative",
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Image
                src="/assets/images/zonesHero.jpg"
                alt="Grupo"
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: 20,
                }}
              />
            </Box>
          </Box>

          <Image
            src="/assets/vectors/flag.svg"
            alt="Bandera"
            width={120}
            height={120}
            style={{
              position: "absolute",
              top: -80,
              right: -100,
            }}
          />
          <Image
            src="/assets/vectors/pencil.svg"
            alt="Lápiz"
            width={100}
            height={100}
            style={{
              position: "absolute",
              bottom: -20,
              left: -20,
            }}
          />
          <Typography
            variant="h4"
            color={"white"}
            textAlign="center"
            bgcolor={theme.secondary}
            py={1}
            px={8}
            borderRadius={6}
            border="8px solid #fff"
            sx={{
              position: "absolute",
              bottom: -40,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Lugares Mapeados
          </Typography>
        </Box>

        <Box mt={10} width={"90%"} justifyItems={"center"}>
          <Typography variant={isSmall ? "body1" : "h6"} textAlign={"center"}>
            El resultado es este Atlas digital, que muestra una colección de
            mapas construidos por las infancias, en los que se señalan los
            lugares que consideran relevantes en su día a día. Estos espacios
            fueron clasificados en distintas categorías: lugares públicos,
            barrios, espacios privados, espacios naturales, instituciones y
            espacios comerciales. Además, todos los datos recopilados son
            abiertos y están disponibles para su descarga, fomentando el uso y
            análisis colectivo de esta información por parte de diversos actores
            sociales, académicos e institucionales.
          </Typography>
          <Box
            width={"20%"}
            height={5}
            borderRadius={10}
            mt={5}
            bgcolor={theme.secondary}
          />
        </Box>

        {/* Cards */}
        <Stack
          alignItems="center"
          justifyContent="space-between"
          gap={5}
          mb={6}
          mt={10}
          borderRadius={6}
          sx={{
            flexDirection: { sm: "column", md: "row" },
            width: {
              xs: "100%",
              sm: "70%",
              md: "90%",
            },
          }}
        >
          <CardWithImage
            title="Zona Liberia"
            subheader="1 de junio 2023"
            image="/assets/images/zones/liberia_2023.jpg"
            description="Escuela Escuela Alba Ocampo Alvarado - Liberia"
            href="/lugares/liberia"
          />
          <CardWithImage
            title="Zona Alajuela"
            subheader="Actualizado el 2 de junio"
            image="/assets/images/zones/alajuela_2023.jpg"
            description="Escuela Ascención Esquivel - Alajuela"
            href="/lugares/alajuela"
          />
        </Stack>

        {/* Brújula decorativa */}
        <Image
          src="/assets/vectors/compass.svg"
          alt="Brújula"
          width={140}
          height={140}
          style={{
            position: "absolute",
            bottom: -50,
            right: -110,
            transform: "rotate(30deg)",
          }}
        />
      </Stack>
    </Stack>
  );
}
