import { Stack, Typography, Box } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type GalleryImage = {
  original: string;
  thumbnail?: string;
  description?: string;
};

type VideoSectionProps = {
  images: GalleryImage[];
  text: string;
};

export default function GallerySection({ images, text }: VideoSectionProps) {
  const { theme, isSmall } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleSlide = (currentIndex: number) => {
    setCurrentIndex(currentIndex);
  };

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
          top: -30,
          left: "5%",
          width: 50,
          height: 50,
          background: `radial-gradient(circle, ${theme.secondary} 0%, transparent 70%)`,
          borderRadius: "50%",
          animation: "bounce 4s infinite ease-in-out",
          filter: "blur(10px)",
          opacity: 0.7,
          "@keyframes bounce": {
            "0%, 100%": { transform: "translateY(0px) scale(1)" },
            "50%": { transform: "translateY(-25px) scale(1.2)" },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 100,
          right: "8%",
          width: 40,
          height: 40,
          background: `radial-gradient(circle, ${theme.primary} 0%, transparent 70%)`,
          borderRadius: "50%",
          animation: "bounce 3s infinite ease-in-out 0.5s",
          filter: "blur(8px)",
          opacity: 0.6,
        }}
      />

      <Typography
        variant={isSmall ? "h4" : "h3"}
        fontWeight="bold"
        color={theme.primary}
        maxWidth={"85%"}
        textAlign={"center"}
        sx={{
          position: "relative",
          background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontFamily: "'Josefin Sans', sans-serif",
          mb: 2,
          "&::before": {
            content: '"📸"',
            position: "absolute",
            left: -50,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: isSmall ? "2rem" : "2.5rem",
            animation: "flash 2s infinite",
            "@keyframes flash": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0.3 },
            },
          },
          "&::after": {
            content: '"✨"',
            position: "absolute",
            right: -50,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: isSmall ? "2rem" : "2.5rem",
            animation: "spin 3s infinite linear",
            "@keyframes spin": {
              "0%": { transform: "translateY(-50%) rotate(0deg)" },
              "100%": { transform: "translateY(-50%) rotate(360deg)" },
            },
          },
        }}
      >
        Descubre nuestra galería de imágenes
      </Typography>

      <Typography
        variant={isSmall ? "body1" : "h6"}
        textAlign="center"
        mt={4}
        mb={8}
        sx={{
          maxWidth: "800px",
          padding: 3,
          borderRadius: 4,
          background: `linear-gradient(135deg, ${theme.background}dd, ${theme.primary}15)`,
          border: `2px dotted ${theme.primary}60`,
          position: "relative",
          fontFamily: "'Josefin Sans', sans-serif",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          "&::before": {
            content: "none",
            position: "absolute",
            left: -15,
            top: -15,
            fontSize: "2rem",
            animation: "wobble 2s infinite ease-in-out",
            "@keyframes wobble": {
              "0%, 100%": { transform: "rotate(-5deg)" },
              "50%": { transform: "rotate(5deg)" },
            },
          },
          "&::after": {
            content: "none",
            position: "absolute",
            right: -15,
            bottom: -15,
            fontSize: "1.8rem",
            animation: "wobble 2s infinite ease-in-out 0.5s",
          },
        }}
      >
        {text}
      </Typography>

      {/* Contador de imágenes divertido */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 3,
          padding: "8px 16px",
          borderRadius: 25,
          background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
          color: "white",
          fontWeight: "bold",
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%, 100%": { transform: "scale(1)" },
            "50%": { transform: "scale(1.05)" },
          },
        }}
      >
        <Box sx={{ animation: "bounce 1s infinite" }}>
        </Box>
        <Typography variant="body1" fontWeight="bold" fontFamily={"'Josefin Sans', sans-serif"}>
          Imagen {currentIndex + 1} de {images.length}
        </Typography>
        <Box sx={{ animation: "bounce 1s infinite 0.3s" }}>
        </Box>
      </Box>

      <Stack 
        maxWidth={"100%"} 
        position="relative"
        sx={{
          "&:hover .gallery-decorations": {
            opacity: 1,
            transform: "scale(1.1)",
          },
        }}
      >
        {/* Marco decorativo alrededor de la galería */}
        <Box
          className="gallery-decorations"
          sx={{
            position: "absolute",
            top: -20,
            left: -20,
            right: -20,
            bottom: -20,
            border: `4px solid ${theme.primary}80`,
            borderRadius: "2rem",
            background: `linear-gradient(45deg, ${theme.primary}10, ${theme.secondary}10)`,
            opacity: 0.7,
            transition: "all 0.5s ease",
            zIndex: 1,
            pointerEvents: "none",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 10,
              left: 10,
              right: 10,
              bottom: 10,
              border: `2px dashed ${theme.secondary}40`,
              borderRadius: "1.5rem",
            },
          }}
        />

        <Box
          sx={{
            "& .image-gallery": {
              borderRadius: "1.5rem",
              overflow: "hidden",
              boxShadow: `0 20px 40px ${theme.primary}30`,
              transition: "all 0.5s ease",
              "&:hover": {
                boxShadow: `0 25px 50px ${theme.primary}50`,
                transform: "translateY(-5px)",
              },
            },
            "& .image-gallery-slide": {
              background: "transparent",
            },
            "& .image-gallery-image": {
              borderRadius: "1rem",
              transition: "transform 0.5s ease",
            },
            "& .image-gallery-thumbnail": {
              border: `2px solid transparent`,
              transition: "all 0.3s ease",
              borderRadius: "0.5rem",
              "&:hover": {
                border: `2px solid ${theme.secondary}`,
                transform: "scale(1.1)",
              },
              "&.active": {
                border: `3px solid ${theme.primary}`,
                boxShadow: `0 0 15px ${theme.primary}80`,
              },
            },
            "& .image-gallery-icon": {
              color: theme.primary,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
              "&:hover": {
                color: theme.secondary,
                transform: "scale(1.2)",
              },
            },
            "& .image-gallery-index": {
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "1rem",
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            },
          }}
        >
          <ImageGallery
            items={images}
            showFullscreenButton
            showPlayButton
            infinite
            additionalClass="gallery"
            showIndex
            onSlide={handleSlide}
          />
        </Box>
      </Stack>

      {/* Icono de cámara animado */}
      <Image
        src="/Vector-9.svg" 
        alt="foto"
        width={isSmall ? 70 : 100}
        height={isSmall ? 70 : 100}
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          transform: "rotate(21deg)",
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
          animation: "float 4s ease-in-out infinite",
        }}
      />

      {/* Icono adicional en la esquina inferior izquierda */}
      <Box
        sx={{
          position: "absolute",
          bottom: -30,
          left: -30,
          animation: "wiggle 3s infinite ease-in-out",
          "@keyframes wiggle": {
            "0%, 100%": { transform: "rotate(-10deg)" },
            "50%": { transform: "rotate(10deg)" },
          },
        }}
      >
        <Typography variant="h3"></Typography>
      </Box>

      {/* Instrucciones interactivas */}
      <Typography
        variant="body2"
        textAlign="center"
        mt={4}
        sx={{
          color: theme.text2,
          fontStyle: "italic",
          padding: 2,
          borderRadius: 2,
          fontFamily: "'Josefin Sans', sans-serif",
          background: theme.background,
          animation: "fadeInOut 3s infinite",
          "@keyframes fadeInOut": {
            "0%, 100%": { opacity: 0.7 },
            "50%": { opacity: 1 },
          },
        }}
      >
        💫 ¡Desliza para ver más fotos mágicas! 💫
      </Typography>
    </Stack>
  );
}