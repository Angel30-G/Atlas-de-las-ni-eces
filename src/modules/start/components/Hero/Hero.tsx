"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";

const baseImages = [
  "/assets/heroImages/Hero8.jpg",
  "/assets/heroImages/Hero9.jpg",
  "/assets/heroImages/Hero10.jpg",
  "/assets/heroImages/Hero13.jpg",
  "/assets/heroImages/Hero12.jpg",
  "/assets/heroImages/Hero6.jpg",
  "/assets/heroImages/Hero11.jpg",
];

const images = [...baseImages, baseImages[0]];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const transitionRef = useRef(true);
  const { isSmall } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === images.length - 1) {
      setTimeout(() => {
        transitionRef.current = false;
        setIndex(0);
      }, 1000);
    } else {
      transitionRef.current = true;
    }
  }, [index]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "60vh", md: "92vh" },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: `100%`,
          height: "100%",
          transform: `translateX(-${index * 100}%)`,
          transition: transitionRef.current
            ? "transform 1s ease-in-out"
            : "none",
        }}
      >
        {images.map((src, i) => (
          <Box
            key={`${src}-${i}`}
            sx={{
              position: "relative",
              flex: "0 0 100%",
              height: "100%",
            }}
          >
            <Image
              src={src}
              alt={`Hero-${i}`}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          variant={isSmall ? "h4" : "h2"}
          sx={{
            color: "white",
            fontWeight: "bold",
            px: 4,
            py: 2,
            textAlign: "center",
            fontFamily: "'Josefin Sans', sans-serif",
          }}
        >
          Atlas de las niñeces Costa Rica
        </Typography>
        <Typography
          variant={isSmall ? "body1" : "h5"}
          sx={{
            color: "white",
            px: 4,
            py: 2,
            textAlign: "center",
            lineHeight: 1.5,
            fontFamily: "'Josefin Sans', sans-serif",
            width: { xs: "90%", md: "80%" },
          }}
        >
          Es resultado de un proyecto de extensión universitaria del Tecnológico
          de Costa Rica (TEC) que busca visibilizar cómo las infancias perciben
          y experimentan el territorio que habitan. Frente a un modelo de
          planificación históricamente adultocéntrico, este proyecto propone una
          ruptura simbólica al reconocer a niños y niñas como sujetos activos
          con capacidad de análisis, opinión y propuesta sobre los espacios que
          habitan.
        </Typography>
      </Box>
    </Box>
  );
}
