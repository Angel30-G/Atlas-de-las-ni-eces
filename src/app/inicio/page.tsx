"use client";
import { useTheme } from "@/theme/ThemeProvider";
import Hero from "@/modules/start/components/Hero";
import Principes from "@/modules/start/components/Principes";
import Areas from "@/modules/start/components/Areas";
import Footer from "@/components/Footer";
import Gallery from "@/modules/gallery-maps/Gallery"
import { Stack } from "@mui/material";

export default function Inicio() {
  const { theme } = useTheme();
  return (
    <>
      <Hero />
      <Gallery />
      <Areas />
      <Footer />
    </>
  );
}
