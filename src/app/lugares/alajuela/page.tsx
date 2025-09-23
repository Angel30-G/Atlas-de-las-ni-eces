"use client";
import { Stack } from "@mui/material";
import alajuelaImages from "./alajuelaImages";
import PlaceCard from "@/modules/places/components/PlaceCard";
import VideoSection from "@/modules/places/components/VideoSection";
import GallerySection from "@/modules/places/components/GallerySection";
import BrochureSection from "@/modules/places/components/BrochureSection";
import MapSection from "@/modules/places/components/MapSection";
import Footer from "@/components/Footer";

export default function Alajuela() {
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
        <PlaceCard school="Ascención Esquivel" place="Alajuela" />
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
          text="Profesores y estudiantes del Tecnológico de Costa Rica (TEC) visitamos la Escuela Ascención Esquivel en Alajuela, en busca de especialistas para apoyarnos en un proyecto muy importante sobre la ciudad. Por suerte, nos encontramos con niñas y niños de 4°, quienes nos contaron sus pensares y sentires sobre el lugar donde viven. Por medio de mapas nos indicaron los lugares que más les gustan, los que consideran seguros, donde juegan y en general, los que hacen parte de su cotidiano de alguna manera."
        />
        <GallerySection
          images={alajuelaImages}
          text={
            "Los niños y niñas nos han ayudado con su conocimiento y estamos emocionados de compartir su increíble trabajo. A través de esta actividad, los estudiantes de 4° grado han aprendido sobre cartografía y la importancia de los mapas en la planificación urbana. Mira el proceso completo en nuestra galería de imágenes"
          }
        />
        <MapSection
          text="Toda la información que los niños y niñas de 4° grado nos compartieron es ahora parte del mapa digital libre de OpenStreetMap, explora el mapa y las zonas de interes"
          mapLink="//umap.openstreetmap.fr/pt-br/map/mapa-alajuela-por-nineces_991953?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true"
        />
        <BrochureSection brochureLink="https://drive.google.com/file/d/1Vlo1YhVME4eBpbtXQrxP6YHI-pNVrdbm/preview" />
        <Stack my={3} />
      </Stack>
      <Footer colored />
    </>
  );
}
