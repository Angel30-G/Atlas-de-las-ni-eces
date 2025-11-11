"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@/theme/ThemeProvider";

interface ImageCardProps {
  title: string;
  description: string;
  image: string;
  showBurst?: boolean; // borrar 
}

export default function ImageCard({
  title,
  description,
  image,
  showBurst = true,
}: ImageCardProps) {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", sm: 380 },
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "'Josefin Sans', sans-serif",
        gap: 2,
        px: { xs: 1, md: 2 },
        position: "relative",
      }}
    >
      {/* Título */}
      <Typography
        variant="h4"
        fontWeight={800}
        sx={{
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          color: theme.primary,
          fontFamily: "'Josefin Sans', sans-serif",
        }}
      >
        {title}
      </Typography>

      {/* Estrella */}
      {showBurst && (
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: -24,
            width: { xs: 120, md: 160 },
            aspectRatio: "1 / 1",
            opacity: 0.18,
            left: 0,
            right: 0,
            mx: "auto",
            zIndex: 0,
            backgroundImage: `url("/Vector3.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            pointerEvents: "none",
            userSelect: "none",
            filter:
              "brightness(0) saturate(100%) invert(90%) sepia(4%) saturate(350%) hue-rotate(175deg) brightness(100%) contrast(95%)",
          }}
        />
      )}

      {/* Imagen*/}
      <Box
        sx={{
          position: "relative",
          width: "min(100%, 360px)",
          mx: "auto",
          aspectRatio: { xs: "16 / 10", md: "4 / 3" },
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 6px 18px rgba(0,0,0,0.10)",
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 600px) 100vw, 360px"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        {/* Difuminado inferior */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "32%",
            background: `linear-gradient(
              0deg,
              ${theme.background}F2 0%,
              ${theme.background}80 45%,
              transparent 100%
            )`,
          }}
        />

        {/* Difuminado izquierdo */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "15%",
            background: `linear-gradient(
              90deg,
              ${theme.background}F2 0%,
              ${theme.background}80 40%,
              transparent 100%
            )`,
          }}
        />

        {/* Difuminado derecho */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "15%",
            background: `linear-gradient(
              -90deg,
              ${theme.background}F2 0%,
              ${theme.background}80 40%,
              transparent 100%
            )`,
          }}
        />
      </Box>

      {/* Descripción */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: 360,
          lineHeight: 1.6,
          color: theme.text2 ?? "text.primary",
          mt: 0.5,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
