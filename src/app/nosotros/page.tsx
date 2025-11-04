"use client";
import Footer from "@/components/Footer";
import AboutCard from "@/modules/about/components/AboutCard";
import Principes from "@/modules/start/components/Principes";
import BrochureSection from "@/modules/places/components/BrochureSection";
import { Stack } from "@mui/material";

export default function About() {
  return (
    <>
      <Stack width={"100%"}>
        <AboutCard />
        <BrochureSection 
          brochureLink="/documents/alajuela/brochure-alajuela.pdf"
          pdfDownloadLink="/documents/alajuela/brochure-alajuela.pdf"
          pdfName="Brochure-Alajuela-Atlas-Niñeces"
        />
      </Stack>
      <Footer />
    </>
  );
}