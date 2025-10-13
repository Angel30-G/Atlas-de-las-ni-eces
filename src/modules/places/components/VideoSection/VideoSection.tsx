import { Stack, Typography, Box } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import { useState, useRef, useEffect } from "react";

type videoSectionProps = {
  videoLink: string;
  text: string;
};

export default function VideoSection({ videoLink, text }: videoSectionProps) {
  const { theme, isSmall } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
      mt={2}
      position="relative"
      sx={{
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        fontFamily: "'Josefin Sans', sans-serif",
      }}
    >
      {/* Elementos decorativos flotantes */}
      <Box
        sx={{
          position: "absolute",
          top: -20,
          left: "10%",
          width: 40,
          height: 40,
          background: `radial-gradient(circle, ${theme.secondary} 0%, transparent 70%)`,
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
          filter: "blur(8px)",
          opacity: 0.6,
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
            "50%": { transform: "translateY(-20px) rotate(180deg)" },
          },
        }}
      />
      
      <Box
        sx={{
          position: "absolute",
          top: 50,
          right: "15%",
          width: 30,
          height: 30,
          background: `radial-gradient(circle, ${theme.primary} 0%, transparent 70%)`,
          borderRadius: "50%",
          animation: "float 4s ease-in-out infinite 1s",
          filter: "blur(6px)",
          opacity: 0.5,
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
            "50%": { transform: "translateY(-15px) rotate(90deg)" },
          },
        }}
      />

      <Typography
        variant={isSmall ? "h4" : "h3"}
        fontWeight="bold"
        textAlign={"center"}
        sx={{
          background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          position: "relative",
          display: "inline-block",
          fontFamily: "'Josefin Sans', sans-serif",
          mb: 2,
          "&::before": {
            content: '"🎬"',
            position: "absolute",
            left: -40,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: isSmall ? "2rem" : "2.5rem",
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 100%": { transform: "translateY(-50%) scale(1)" },
              "50%": { transform: "translateY(-50%) scale(1.2)" },
            },
          },
          "&::after": {
            content: '"🌟"',
            position: "absolute",
            right: -40,
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
        ¿De qué trató la actividad?
      </Typography>

      <Typography
        variant={isSmall ? "body1" : "h6"}
        textAlign={"center"}
        mt={4}
        mb={6}
        sx={{
          maxWidth: "800px",
          padding: 3,
          borderRadius: 4,
          background: `linear-gradient(135deg, ${theme.background}dd, ${theme.primary}15)`,
          border: `2px dashed ${theme.primary}40`,
          fontFamily: "'Josefin Sans', sans-serif",
          position: "relative",
          "&::before": {
            content: '"💡"',
            position: "absolute",
            left: -10,
            top: -10,
            fontSize: "1.5rem",
            animation: "glow 2s infinite alternate",
            "@keyframes glow": {
              "0%": { filter: "drop-shadow(0 0 5px gold)" },
              "100%": { filter: "drop-shadow(0 0 15px gold)" },
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
        {/* Marco decorativo alrededor del video */}
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
              top: 10,
              left: 10,
              right: 10,
              bottom: 10,
              border: `2px dashed ${theme.secondary}60`,
              borderRadius: "1rem",
            },
          }}
        />

        {/* Efectos de partículas al hacer hover */}
        {isHovered && (
          <>
            <Box
              sx={{
                position: "absolute",
                top: -20,
                left: "20%",
                width: 20,
                height: 20,
                background: theme.secondary,
                borderRadius: "50%",
                animation: "popIn 0.6s ease-out",
                zIndex: 2,
                "@keyframes popIn": {
                  "0%": { transform: "scale(0)", opacity: 0 },
                  "50%": { transform: "scale(1.2)" },
                  "100%": { transform: "scale(1)", opacity: 1 },
                },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -15,
                right: "30%",
                width: 15,
                height: 15,
                background: theme.primary,
                borderRadius: "50%",
                animation: "popIn 0.6s ease-out 0.2s both",
                zIndex: 2,
              }}
            />
          </>
        )}

        <iframe
          width="100%"
          height="550"
          style={{ 
            borderRadius: "1rem",
            transform: isHovered ? "scale(1.02) rotateX(5deg)" : "scale(1) rotateX(0deg)",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: isHovered 
              ? `0 20px 40px ${theme.primary}40, 0 0 0 4px ${theme.secondary}80`
              : `0 10px 30px ${theme.primary}20`,
            position: "relative",
            zIndex: 3,
          }}
          src={videoLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        {/* Indicador de play animado */}
        <Box
        >
          <Typography
            variant="h4"
            sx={{
              background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
              ml: 1,
            }}
          >
          </Typography>
        </Box>
      </Box>

      {/* Texto decorativo debajo del video */}
      <Typography
        variant="body2"
        textAlign="center"
        mt={3}
        sx={{
          color: theme.text2,
          fontFamily: "'Josefin Sans', sans-serif",
          animation: "fadeInOut 3s infinite",
          "@keyframes fadeInOut": {
            "0%, 100%": { opacity: 0.6 },
            "50%": { opacity: 1 },
          },
        }}
      >
        ¡Haz clic en el video para ver la aventura! 🚀
      </Typography>
    </Stack>
  );
}