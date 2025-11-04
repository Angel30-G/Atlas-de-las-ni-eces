"use client";
import TitleCover from "@/modules/start/components/TitleCover";
import NinecesMapeando from "@/modules/start/components/NinecesMapeando";
import MapHome from "@/modules/home-map/MapHome";
import Areas from "@/modules/start/components/Areas";
import Footer from "@/components/Footer";

export default function Inicio() {
  return (
    <>
      <TitleCover coverSrc="/EditCover.png" /> 
      <NinecesMapeando />
      <MapHome
        text="Mapas Interactivos"
        mapLink="https://umap.openstreetmap.fr/es/map/mapa-sin-titulo_1300328?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true&datalayers=d8ccf1d8-87ce-4afd-9717-f722dc93f9e4#16/10.0158/-84.2132"
      />
      <Areas />
      <Footer />
    </>
  );
}
