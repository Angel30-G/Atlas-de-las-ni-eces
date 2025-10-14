"use client";
import { useTheme } from "@/theme/ThemeProvider";
import Hero from "@/modules/start/components/Hero";
import Principes from "@/modules/start/components/Principes";
import Areas from "@/modules/start/components/Areas";
import Footer from "@/components/Footer";
import Gallery from "@/modules/gallery-maps/Gallery"
import MapHome from "@/modules/home-map";
import { Stack } from "@mui/material";

export default function Inicio() {
  const { theme } = useTheme();
  return (
    <>
      <Hero />
       <MapHome
                text="Toda la información que los niños y niñas de 4° grado nos compartieron es ahora parte del mapa digital libre de OpenStreetMap, explora el mapa y las zonas de interes"
                mapLink="//umap.openstreetmap.fr/pt-br/map/mapa-alajuela-por-nineces_991953?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true"
              />
      <Areas />
      <Footer />
    </>
  );
}
