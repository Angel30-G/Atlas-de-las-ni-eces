"use client";
import { Stack } from "@mui/material";
import alajuelaImages from "./guatemalaImages";
import PlaceCard from "@/modules/places/components/PlaceCard";
import VideoSection from "@/modules/places/components/VideoSection";
import GallerySection from "@/modules/places/components/GallerySection";
import Footer from "@/components/Footer";

export default function Guatemala() {
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
        marginX={"auto"}
        alignItems={"center"}
        mt={6}
      >
        <PlaceCard school="Guatemala" place="Alajuela" />
      </Stack>
      <Stack
        sx={{
          width: {
            xs: "95%",
            sm: "90%",
            md: "75%",
          },
        }}
        maxWidth={"1300px"}
        marginX={"auto"}
        alignItems={"center"}
        mt={8}
      >
        <VideoSection
          videoLink="https://www.youtube.com/embed/CnHtFwKbPzQ?si=trdzmczsFMnJwz-0"
          text="Profesores y estudiantes del Tecnológico de Costa Rica (TEC) visitamos la Escuela republica de Guatemala, en busca de especialistas para apoyarnos en un proyecto muy importante sobre la ciudad. Por suerte, nos encontramos con niñas y niños, quienes nos contaron sus pensares y sentires sobre el lugar donde viven. Por medio de mapas nos indicaron los lugares que más les gustan, los que consideran seguros, donde juegan y en general, los que hacen parte de su cotidiano de alguna manera."
        />
        <GallerySection
          images={alajuelaImages}
          text={
            "Los niños y niñas nos han ayudado con su conocimiento y estamos emocionados de compartir su increíble trabajo. A través de esta actividad, los estudiantes de la escuela republica de Guatemala han aprendido sobre cartografía y la importancia de los mapas en la planificación urbana. Mira el proceso completo en nuestra galería de imágenes"
          }
        />
      </Stack>
      <Footer colored />
    </>
  );
}
