"use client";

import DownloadButton from "@/components/DownloadButton";
import { useTheme } from "@/theme/ThemeProvider";
import { Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import { documentsAlajuela, documentsLiberia } from "@/modules/documents";
import { useState, useEffect } from "react";

type placeCardProps = {
  place: "Alajuela" | "Liberia";
  school: string;
};

export default function PlaceCard({ place, school }: placeCardProps) {
  const { theme, isSmall } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const documents = place === "Alajuela" ? documentsAlajuela : documentsLiberia;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Stack
      width="100%"
      p={2}
      borderRadius={4}
      bgcolor={theme.primary}
      position={"relative"}
      sx={{
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: `0 20px 40px rgba(0,0,0,0.15)`,
        },
        cursor: "pointer",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
          transition: "left 0.8s ease",
        },
        "&:hover::before": {
          left: "100%",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Elementos decorativos de fondo */}
      <Box
        sx={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.secondary}20 0%, transparent 70%)`,
          opacity: 0.7,
          animation: "pulse 4s infinite ease-in-out",
          "@keyframes pulse": {
            "0%, 100%": {
              transform: "scale(1)",
              opacity: 0.7,
            },
            "50%": {
              transform: "scale(1.1)",
              opacity: 0.4,
            },
          },
        }}
      />
      
      <Stack
        p={3}
        borderRadius={4}
        sx={{ 
          border: `3px dotted ${theme.background}80`,
          background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.primary}dd 100%)`,
          backdropFilter: "blur(10px)",
          position: "relative",
          zIndex: 2,
          transition: "all 0.3s ease",
          "&:hover": {
            border: `3px dotted ${theme.background}`,
            background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary}44 100%)`,
          },
        }}
      >
        <Typography
          variant={isSmall ? "h4" : "h3"}
          color="white"
          sx={{
            background: "linear-gradient(45deg, #FFFFFF, #E0F7FA)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
            mb: 1,
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >{`Niñeces mapeando ${place}`}</Typography>

        <Stack
          direction={isSmall ? "column" : "row"}
          justifyContent={"space-between"}
          alignItems={isSmall ? "flex-start" : "center"}
          mt={3}
          gap={2}
        >
          <Box
            px={2}
            py={1.5}
            borderRadius={3}
            bgcolor={theme.background}
            sx={{
              display: "inline-flex",
              width: "fit-content",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: isHovered ? "0 8px 20px rgba(0,0,0,0.15)" : "0 4px 12px rgba(0,0,0,0.1)",
              border: `2px solid ${theme.secondary}40`,
              "&:hover": {
                border: `2px solid ${theme.secondary}`,
              },
            }}
          >
            <Typography
              variant={isSmall ? "body1" : "h5"}
              color={theme.text2}
              whiteSpace="nowrap"
              fontWeight="600"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&::before": {
                  content: '"🏫"',
                  fontSize: "1.2em",
                },
              }}
            >
              {`Escuela ${school}`}
            </Typography>
          </Box>

          <Box 
            width={200} 
            height={50}
            sx={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <DownloadButton type="textIcon" elements={documents} />
          </Box>
        </Stack>

        {/* Icono de escuela con animación */}
        <Image
          src="/assets/vectors/school.svg"
          alt="escuela"
          width={isSmall ? 70 : 100}
          height={isSmall ? 70 : 100}
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            transform: isHovered ? "rotate(25deg) scale(1.1)" : "rotate(21deg) scale(1)",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
          }}
        />

        {/* Elementos decorativos adicionales */}
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: 10,
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: theme.secondary,
            opacity: 0.3,
            animation: "bounce 3s infinite ease-in-out",
            "@keyframes bounce": {
              "0%, 100%": {
                transform: "translateY(0)",
              },
              "50%": {
                transform: "translateY(-10px)",
              },
            },
          }}
        />
        
        <Box
          sx={{
            position: "absolute",
            top: 15,
            left: 25,
            width: 15,
            height: 15,
            borderRadius: "50%",
            background: theme.secondary,
            opacity: 0.2,
            animation: "bounce 2s infinite ease-in-out 0.5s",
            "@keyframes bounce": {
              "0%, 100%": {
                transform: "translateY(0)",
              },
              "50%": {
                transform: "translateY(-8px)",
              },
            },
          }}
        />
      </Stack>

      {/* Efecto de brillo al hacer hover */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${theme.secondary}15, transparent 30%)`,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
          borderRadius: 4,
        }}
      />
    </Stack>
  );
}