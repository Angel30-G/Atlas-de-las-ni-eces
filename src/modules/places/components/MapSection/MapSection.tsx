import { Stack, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import "react-image-gallery/styles/css/image-gallery.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type MapSectionProps = {
  mapLink: string;
  text: string;
};

export default function MapSection({ mapLink, text }: MapSectionProps) {
  const { theme, isSmall } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isExploring, setIsExploring] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Stack
      ref={sectionRef}
      width={"100%"}
      marginX={"auto"}
      display={"flex"}
      alignItems={"center"}
      position={"relative"}
      mt={10}
      sx={{
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Elementos decorativos flotantes */}
      <Box
        sx={{
          position: "absolute",
          top: -40,
          left: "10%",
          width: 40,
          height: 40,
          background: `radial-gradient(circle, ${theme.secondary} 0%, transparent 70%)`,
          borderRadius: "50%",
          animation: "floatMap 6s infinite ease-in-out",
          filter: "blur(8px)",
          opacity: 0.7,
          "@keyframes floatMap": {
            "0%, 100%": { 
              transform: "translate(0px, 0px) rotate(0deg)",
              opacity: 0.7
            },
            "33%": { 
              transform: "translate(20px, -30px) rotate(120deg)",
              opacity: 0.4
            },
            "66%": { 
              transform: "translate(-15px, -20px) rotate(240deg)",
              opacity: 0.9
            },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 80,
          right: "8%",
          width: 30,
          height: 30,
          background: `radial-gradient(circle, ${theme.primary} 0%, transparent 70%)`,
          borderRadius: "50%",
          animation: "floatMap 5s infinite ease-in-out 1s",
          filter: "blur(6px)",
          opacity: 0.6,
        }}
      />

      <Typography
        variant={isSmall ? "h4" : "h3"}
        fontWeight="bold"
        color={theme.primary}
        maxWidth={"80%"}
        textAlign={"center"}
        sx={{
          position: "relative",
          background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          fontFamily: "'Josefin Sans', sans-serif",
          color: "transparent",
          mb: 2,
          textShadow: "0 4px 8px rgba(0,0,0,0.1)",
          "&::before": {
            content: '"🗺️"',
            position: "absolute",
            left: -50,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: isSmall ? "2rem" : "2.5rem",
            animation: "compassSpin 4s infinite linear",
            "@keyframes compassSpin": {
              "0%": { transform: "translateY(-50%) rotate(0deg)" },
              "100%": { transform: "translateY(-50%) rotate(360deg)" },
            },
          },
          "&::after": {
            content: '"🔍"',
            position: "absolute",
            right: -50,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: isSmall ? "2rem" : "2.5rem",
            animation: "searchPulse 2s infinite alternate",
            "@keyframes searchPulse": {
              "0%": { transform: "translateY(-50%) scale(1)" },
              "100%": { transform: "translateY(-50%) scale(1.3)" },
            },
          },
        }}
      >
        Explora nuestro mapa interactivo
      </Typography>

      <Typography
        variant={isSmall ? "body1" : "h6"}
        textAlign={"center"}
        mt={4}
        mb={8}
        sx={{
          maxWidth: "800px",
          padding: 3,
          borderRadius: 4,
          background: `linear-gradient(135deg, ${theme.background}dd, ${theme.primary}15)`,
          border: `3px dashed ${theme.primary}60`,
          position: "relative",
          fontFamily: "'Josefin Sans', sans-serif",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          "&::before": {
            content: '"💡"',
            position: "absolute",
            left: -15,
            top: -15,
            fontSize: "2rem",
            animation: "glow 2s infinite alternate",
            "@keyframes glow": {
              "0%": { filter: "drop-shadow(0 0 5px gold)" },
              "100%": { filter: "drop-shadow(0 0 15px gold)" },
            },
          },
          "&::after": {
            content: '"🎯"',
            position: "absolute",
            right: -15,
            bottom: -15,
            fontSize: "1.8rem",
            animation: "bounce 1s infinite alternate",
            "@keyframes bounce": {
              "0%": { transform: "translateY(0px)" },
              "100%": { transform: "translateY(-10px)" },
            },
          },
        }}
      >
        {text}
      </Typography>

      <Box
        position="relative"
        width="100%"
        maxWidth="1000px"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          perspective: "1000px",
        }}
      >
        {/* Marco decorativo del mapa */}
        <Box
          sx={{
            position: "absolute",
            top: -15,
            left: -15,
            right: -15,
            bottom: -15,
            border: `4px solid ${theme.primary}`,
            borderRadius: "1.5rem",
            background: `linear-gradient(45deg, ${theme.primary}20, ${theme.secondary}20)`,
            transform: isHovered ? "scale(1.02)" : "scale(1)",
            opacity: isHovered ? 1 : 0.7,
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: 1,
            pointerEvents: "none",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 8,
              left: 8,
              right: 8,
              bottom: 8,
              border: `2px dotted ${theme.secondary}60`,
              borderRadius: "1rem",
            },
          }}
        />

        {/* Efectos de exploración */}
        {isHovered && (
          <>
            <Box
              sx={{
                position: "absolute",
                top: "30%",
                left: "20%",
                width: 25,
                height: 25,
                background: theme.secondary,
                borderRadius: "50%",
                animation: "popIn 0.6s ease-out",
                zIndex: 2,
                filter: "drop-shadow(0 0 10px gold)",
                "@keyframes popIn": {
                  "0%": { transform: "scale(0)", opacity: 0 },
                  "50%": { transform: "scale(1.5)" },
                  "100%": { transform: "scale(1)", opacity: 1 },
                },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "40%",
                right: "25%",
                width: 20,
                height: 20,
                background: theme.primary,
                borderRadius: "50%",
                animation: "popIn 0.6s ease-out 0.3s both",
                zIndex: 2,
                filter: "drop-shadow(0 0 10px lightblue)",
              }}
            />
          </>
        )}

        <iframe
          style={{ 
            borderRadius: "1rem",
            transform: isHovered ? "scale(1.01) rotateX(2deg)" : "scale(1) rotateX(0deg)",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: isHovered 
              ? `0 25px 50px ${theme.primary}40, 0 0 0 3px ${theme.secondary}60`
              : `0 15px 40px ${theme.primary}30`,
            position: "relative",
            zIndex: 3,
            border: "none",
          }}
          width="100%"
          height="500px"
          allowFullScreen
          allow="geolocation"
          src={mapLink}
        />

        {/* Indicador de exploración */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 4,
            opacity: isHovered ? 1 : 0,
            transition: "all 0.5s ease",
            pointerEvents: "none",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              background: "rgba(255,255,255,0.95)",
              padding: "12px 24px",
              borderRadius: "50px",
              fontWeight: "bold",
              color: theme.primary,
              fontFamily: "'Josefin Sans', sans-serif",
              display: "flex",
              alignItems: "center",
              gap: 1,
              animation: "pulse 2s infinite",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              "@keyframes pulse": {
                "0%, 100%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.05)" },
              },
            }}
          >
            <Box sx={{ animation: "compassSpin 3s infinite linear" }}>
              🧭
            </Box>
            ¡Explora el mapa!
            <Box sx={{ animation: "bounce 1s infinite alternate" }}>
              ⬇️
            </Box>
          </Typography>
        </Box>
      </Box>

      {/* Botón de pantalla completa mejorado */}
      <Button
        component={Link}
        href={mapLink}
        target="_blank"
        variant="contained"
        onMouseEnter={() => setIsExploring(true)}
        onMouseLeave={() => setIsExploring(false)}
        sx={{
          mt: 3,
          padding: "12px 32px",
          borderRadius: "50px",
          background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
          color: "white",
          fontWeight: "bold",
          fontSize: isSmall ? "0.9rem" : "1rem",
          fontFamily: "'Josefin Sans', sans-serif",
          textTransform: "none",
          transform: isExploring ? "scale(1.1) translateY(-5px)" : "scale(1)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: isExploring 
            ? `0 15px 30px ${theme.primary}60` 
            : `0 8px 20px ${theme.primary}40`,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            transition: "left 0.6s ease",
          },
          "&:hover::before": {
            left: "100%",
          },
          "&:hover": {
            background: `linear-gradient(135deg, ${theme.secondary}, ${theme.primary})`,
          },
        }}
      >
        <Box sx={{ mr: 1, animation: "zoomInOut 2s infinite" }}>
          🔍
        </Box>
        Ver mapa en pantalla completa
        <Box sx={{ ml: 1, animation: "zoomInOut 2s infinite 0.5s" }}>
          🚀
        </Box>
      </Button>

      {/* Icono de mapa animado */}
      <Image
        src="/assets/vectors/map.svg"
        alt="mapa"
        width={isSmall ? 70 : 100}
        height={isSmall ? 70 : 100}
        style={{
          position: "absolute",
          top: -20,
          left: -20,
          transform: "rotate(-21deg)",
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
          animation: "float 4s ease-in-out infinite",
        }}
      />

      {/* Icono adicional de brújula */}
      <Box
        sx={{
          position: "absolute",
          bottom: -30,
          right: -30,
          animation: "compassSpin 8s infinite linear",
          fontSize: isSmall ? "3rem" : "4rem",
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
          opacity: 0.8,
        }}
      >
        🧭
      </Box>

      {/* Texto decorativo animado */}
      <Typography
        variant="body2"
        textAlign="center"
        mt={2}
        sx={{
          color: theme.text2,
          fontStyle: "italic",
          padding: 2,
          borderRadius: 2,
          background: theme.background,
          fontFamily: "'Josefin Sans', sans-serif",
          animation: "fadeInOut 4s infinite",
          "@keyframes fadeInOut": {
            "0%, 100%": { opacity: 0.6 },
            "50%": { opacity: 1 },
          },
        }}
      >
        🎯 ¡Haz clic y descubre lugares increíbles! 🎯
      </Typography>
    </Stack>
  );
}