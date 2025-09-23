"use client";

import PlaceCard from "@/modules/places/components/PlaceCard";
import VideoSection from "@/modules/places/components/VideoSection";
import GallerySection from "@/modules/places/components/GallerySection";
import liberiaImages from "./liberiaImages";
import BrochureSection from "@/modules/places/components/BrochureSection";
import MapSection from "@/modules/places/components/MapSection";
import Footer from "@/components/Footer";
import { Stack, Typography, Box, Divider, Avatar, Grid } from "@mui/material";
import { Person, Group } from "@mui/icons-material";
import EstudiantesLiberiaCard from "@/components/LiberiaStudents/EstudiantesLiberiaCard";
import { useTheme } from "@/theme/ThemeProvider";

export default function Liberia() {
  const { theme } = useTheme();

  // Datos de estudiantes de Heredia
  const estudiantes_heredia = [
    "Juan Pablo Solís",
    "Iván Garay Alfaro",
    "Josué Alfaro Murillo",
    "Gabriel Alfaro Murillo",
    "Isabella Lago Obando",
    "Jimena Esquivel Mora",
    "Luzciana Barboza Padilla",
    "Daniela Mata",
    "Daisy Rebeca Eras Vargas",
    "Thiago José Marchena Ugarte",
    "Royner Andrés López Calderón",
    "Carlos José Chavarría ",
    "Saymond Mendoza Garnier",
    "Auxiliadora Kiany Saborío",
    "Maripaz Centeno Centeno",
    "Alejandro Castillo Chavarría",
    "José Mario Chaves",
    "Eithan A. Rio Solano",
    "Valerie Alvares Medina",
    "Kessler David Rodríguez Rodríguez",
    "Jean Marki Castillo Bastos",
    "Valarie Nicole Corella Jiménez",
    "Valenthina López Villalobos",
    "Sharith Salazar Morales",
    "Dylan Daniel González Morales",
    "Misael Morena Ramírez",
    "Mariana Valentina Eras Hernández",
    "Kendall Manuel Quirós Moreno",
    "Mateo Eras Ocampo",
    "Justin Stiven Zúñiga Quesada",
    "Maylen Celeste Castañeda",
    "Gael Santiago Vásquez Meza",
    "Melissa Isabela Orozco",
    "Britney María Torres ",
    "Neymar Javier Zamora Bello",
    "Danna Sofia Salas Ruiz",
    "Sebastián Hernández Martínez",
    "Meredith López Maroto",
    "Lia Kaylani Mendoza Quirós",
    "Whitney Camila Cardois Torres",
    "Valentina Aguilar Cisneros",
    "Marissa López Maroto",
    "Jimena de los Ángeles Ruiz",
    "Alejandro Serrano Méndez",
    "Yorjany Ugarte Chacón",
  ];

  return (
    <>
      <Stack
        sx={{
          width: {
            xs: "95%",
            sm: "90%",
            md: "75%",
          },
        }}
        marginX="auto"
        alignItems="center"
        mt={6}
      >
        <PlaceCard school="Alba Ocampo Alvarado" place="Liberia" />
      </Stack>

      <Stack
        sx={{
          width: {
            xs: "95%",
            sm: "90%",
            md: "75%",
          },
        }}
        maxWidth="1300px"
        marginX="auto"
        alignItems="center"
        mt={8}
      >
        <VideoSection
          videoLink="https://www.youtube.com/embed/UTcbZrgnPdM?si=t56DwKq7XKnZmime"
          text="Profesores y estudiantes del Tecnológico de Costa Rica (TEC) visitamos la Escuela Alba Ocampo en Liberia en busca de especialistas para apoyarnos en un proyecto muy importante sobre la ciudad. Por suerte, nos encontramos con niñas y niños de 4°, quienes nos contaron sus pensares y sentires sobre el lugar donde viven. Por medio de mapas nos indicaron los lugares que más les gustan, los que consideran seguros, donde juegan y en general, los que hacen parte de su cotidiano de alguna manera."
        />
        <GallerySection
          images={liberiaImages}
          text="Los niños y niñas nos han ayudado con su conocimiento y estamos emocionados de compartir su increíble trabajo. A través de esta actividad, los estudiantes de 4° grado han aprendido sobre cartografía y la importancia de los mapas en la planificación urbana. Mira el proceso completo en nuestra galería de imágenes"
        />
        <MapSection
          text="Toda la información que los niños y niñas de 4° grado nos compartieron es ahora parte del mapa digital libre de OpenStreetMap, explora el mapa y las zonas de interes"
          mapLink="//umap.openstreetmap.fr/es/map/mapa-liberia-por-nineces_988827?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true"
        />
        <BrochureSection
          brochureLink="https://drive.google.com/file/d/1YN2pLflREt-DLABQOD7WkRHdloUYaXKr/preview"
        />
        <Stack my={3} />
      </Stack>

      {/* Sección de Estudiantes de Heredia */}

      <Box sx={{ mt: 6, marginBottom: 6 }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 4,
          }}
        >
          <Group sx={{ color: theme.primary, verticalAlign: 'middle', mr: 1 }} />
          Niñas y Niños participantes del talles de la Escuela Alba Ocampo, Liberia
        </Typography>

        <Divider sx={{
          my: 2,
          bgcolor: theme.primary,
          height: 2
        }} />

        {/* Contenedor de grupos usando Stack */}
        <Stack spacing={4}>
          {/* Grupo 1 */}
          <Box sx={{ width: '100%' }}>
            <EstudiantesLiberiaCard
              grupo="Grupo 1"
              estudiantes={estudiantes_heredia.slice(0, 46)}
            />
          </Box>

        </Stack>
      </Box>

      <Footer colored />
    </>
  );
}