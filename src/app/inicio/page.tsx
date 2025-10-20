"use client";
import { useTheme } from "@/theme/ThemeProvider";
import Hero from "@/modules/start/components/Hero";
import Principes from "@/modules/start/components/Principes";
import Areas from "@/modules/start/components/Areas";
import Footer from "@/components/Footer";
import Gallery from "@/modules/gallery-maps/Gallery"
import MapHome from "@/modules/home-map/MapHome";
import { Stack } from "@mui/material";

export default function Inicio() {
  const { theme } = useTheme();
  return (
    <>
      <Hero />
      <MapHome
                text="Toda la información que los niños y niñas de 4° grado nos compartieron es ahora parte del mapa digital libre de OpenStreetMap, explora el mapa y las zonas de interes"
                mapLink="https://umap.openstreetmap.fr/es/map/mapa-sin-titulo_1300328?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true&datalayers=d8ccf1d8-87ce-4afd-9717-f722dc93f9e4#16/10.0158/-84.2132"
              />
      <Areas />
      <Footer />
    </>
  );
}
