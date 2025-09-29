"use client";
import Footer from "@/components/Footer";
import AboutCard from "@/modules/about/components/AboutCard";
import Principes from "@/modules/start/components/Principes";
import { Stack } from "@mui/material";
export default function About() {
  return (
    <>
      <Stack width={"100%"}>
        <AboutCard />
        <Principes />
      </Stack>
      <Footer />
    </>
  );
}
