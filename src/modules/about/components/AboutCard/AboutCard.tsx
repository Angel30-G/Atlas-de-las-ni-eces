"use client";
import { Box, Stack, Typography, Divider, Button } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@/theme/ThemeProvider";
import { useState, useRef, useEffect } from "react";

export default function AboutUs() {
  const { theme, isSmall } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      width="100%"
      minHeight="100vh"
      bgcolor={theme.background}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      {/* Elementos decorativos de fondo */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: 100,
          height: 100,
          background: `radial-gradient(circle, ${theme.secondary}30 0%, transparent 70%)`,
          borderRadius: "50%",
          animation: "float 8s infinite ease-in-out",
          filter: "blur(20px)",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
            "50%": { transform: "translateY(-30px) rotate(180deg)" },
          },
        }}
      />
      
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "8%",
          width: 150,
          height: 150,
          background: `radial-gradient(circle, ${theme.primary}20 0%, transparent 70%)`,
          borderRadius: "50%",
          animation: "float 6s infinite ease-in-out 1s",
          filter: "blur(25px)",
        }}
      />

      {/* Hero Section - Título y descripción principal */}
      <Box
        width="100%"
        minHeight="70vh"
        bgcolor={theme.primary}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        sx={{
          background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
          overflow: "hidden",
        }}
      >
        {/* Patrón decorativo */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 25% 25%, ${theme.secondary}20 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
            animation: "movePattern 20s infinite linear",
            "@keyframes movePattern": {
              "0%": { transform: "translate(0, 0)" },
              "100%": { transform: "translate(50px, 50px)" },
            },
          }}
        />

        <Stack
          spacing={4}
          width="100%"
          maxWidth="1200px"
          textAlign="center"
          px={3}
          sx={{
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Typography
            variant={isSmall ? "h3" : "h1"}
            fontWeight="bold"
            color="white"
            sx={{
              textShadow: "0 4px 8px rgba(0,0,0,0.3)",
              position: "relative",
              display: "inline-block",
              "&::before": {
                content: '"🌎"',
                position: "absolute",
                left: -60,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: isSmall ? "2.5rem" : "3rem",
                animation: "spin 10s infinite linear",
                "@keyframes spin": {
                  "0%": { transform: "translateY(-50%) rotate(0deg)" },
                  "100%": { transform: "translateY(-50%) rotate(360deg)" },
                },
              },
              "&::after": {
                content: '"👧👦"',
                position: "absolute",
                right: -80,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: isSmall ? "2rem" : "2.5rem",
                animation: "bounce 2s infinite ease-in-out",
                "@keyframes bounce": {
                  "0%, 100%": { transform: "translateY(-50%) scale(1)" },
                  "50%": { transform: "translateY(-50%) scale(1.2)" },
                },
              },
            }}
          >
            ATLAS DE LAS NIÑECES
          </Typography>
          
          <Typography
            variant={isSmall ? "body1" : "h5"}
            color="white"
            lineHeight={1.8}
            width="100%"
            maxWidth="900px"
            mx="auto"
            sx={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              padding: 4,
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
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

          {/* Flecha indicadora */}
          <Box
            sx={{
              animation: "bounceArrow 2s infinite ease-in-out",
              "@keyframes bounceArrow": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(10px)" },
              },
            }}
          >
            <Typography variant="h4" color="white">
              ⬇️
            </Typography>
          </Box>
        </Stack>

        {/* Imagen decorativa en esquina */}
        <Image
          src="/assets/vectors/compass.svg"
          alt="Brújula"
          width={120}
          height={120}
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            opacity: 0.7,
            animation: "rotateSlow 20s infinite linear",
          }}
        />
      </Box>

      {/* Sección Quiénes Somos */}
      <Box
        ref={sectionRef}
        sx={{
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          maxWidth="1400px"
          minHeight="400px"
          boxShadow={6}
          p={6}
          borderRadius={4}
          bgcolor={theme.surface}
          spacing={6}
          position="relative"
          mb={6}
          mt={10}
          sx={{
            background: `linear-gradient(135deg, ${theme.surface} 0%, ${theme.background} 100%)`,
            border: `2px solid ${theme.primary}20`,
            "&:hover": {
              boxShadow: `0 20px 60px ${theme.primary}20`,
              transform: "translateY(-5px)",
              transition: "all 0.3s ease",
            },
          }}
        >
          {/* Texto a la izquierda */}
          <Stack spacing={4} flex={1} justifyContent="center">
            <Box>
              <Typography
                variant={isSmall ? "h4" : "h3"}
                fontWeight="bold"
                color={theme.primary}
                sx={{
                  background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={{ animation: "pulse 2s infinite" }}>
                  🤝
                </Box>
                ¿QUIÉNES SOMOS?
              </Typography>

              <Divider 
                sx={{ 
                  width: 100, 
                  height: 4,
                  borderColor: theme.secondary, 
                  borderWidth: 2,
                  borderRadius: 2,
                  mt: 2,
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                }} 
              />
            </Box>

            <Stack spacing={3}>
              <Typography
                variant={isSmall ? "body1" : "h6"}
                fontWeight={400}
                color={theme.text2}
                lineHeight={1.8}
                sx={{
                  padding: 3,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.8)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  borderLeft: `4px solid ${theme.primary}`,
                }}
              >
                Somos un equipo interdisciplinario comprometido con la
                transformación urbana participativa. Trabajamos en conjunto con
                comunidades locales para mapear, comprender y visibilizar sus
                entornos.
              </Typography>

              <Typography
                variant={isSmall ? "body1" : "h6"}
                fontWeight={400}
                color={theme.text2}
                lineHeight={1.8}
                sx={{
                  padding: 3,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.8)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  borderLeft: `4px solid ${theme.secondary}`,
                  position: "relative",
                }}
              >
                Fomentamos especialmente la participación activa de{" "}
                <strong style={{ color: theme.primary }}>niñas y niños</strong> en procesos de planificación,
                reconociendo sus voces, vivencias y conocimientos como esenciales
                para construir ciudades más humanas, justas y significativas.
                
                {/* Decoración infantil */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -10,
                    right: 20,
                    animation: "wiggle 3s infinite ease-in-out",
                    "@keyframes wiggle": {
                      "0%, 100%": { transform: "rotate(-5deg)" },
                      "50%": { transform: "rotate(5deg)" },
                    },
                  }}
                >
                  <Typography variant="h5">🎨</Typography>
                </Box>
              </Typography>
            </Stack>

            {/* Botón de acción */}
            <Button
              variant="contained"
              sx={{
                padding: "12px 32px",
                borderRadius: "50px",
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                color: "white",
                fontWeight: "bold",
                fontSize: isSmall ? "0.9rem" : "1rem",
                textTransform: "none",
                boxShadow: `0 8px 25px ${theme.primary}40`,
                "&:hover": {
                  background: `linear-gradient(135deg, ${theme.secondary}, ${theme.primary})`,
                  transform: "translateY(-3px)",
                  boxShadow: `0 12px 35px ${theme.primary}60`,
                },
                transition: "all 0.3s ease",
                maxWidth: "250px",
              }}
            >
              Conoce más sobre nosotros
            </Button>
          </Stack>

          {/* Imagen a la derecha */}
          <Box
            flex={1}
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            sx={{
              overflow: "hidden",
              aspectRatio: "4/4",
              borderRadius: 3,
              boxShadow: `0 15px 40px ${theme.primary}30`,
              "&:hover img": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Image
              src="/assets/heroImages/Hero8.jpg"
              alt="Equipo de trabajo en campo"
              fill
              style={{
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
            />
            
            {/* Overlay decorativo */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(45deg, ${theme.primary}20, transparent)`,
                opacity: 0.6,
              }}
            />
          </Box>

          {/* Elementos decorativos en esquinas */}
          <Image
            src="/assets/vectors/idea.svg"
            alt="idea"
            width={isSmall ? 70 : 100}
            height={isSmall ? 70 : 100}
            style={{
              position: "absolute",
              top: -30,
              right: -20,
              transform: "rotate(15deg)",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
              animation: "float 4s infinite ease-in-out",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: -20,
              left: -20,
              animation: "bounce 3s infinite ease-in-out",
            }}
          >
            <Typography variant="h3">📚</Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: 20,
              left: 20,
              animation: "pulse 2s infinite ease-in-out 1s",
            }}
          >
            <Typography variant="h4">🌟</Typography>
          </Box>
        </Stack>
      </Box>

      {/* Sección adicional - Valores */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        width="100%"
        maxWidth="1400px"
        mb={10}
        px={3}
      >
        {[
          { icon: "🎯", title: "Misión", text: "Visibilizar las perspectivas infantiles sobre el territorio" },
          { icon: "👁️", title: "Visión", text: "Ciudades más inclusivas y participativas para todos" },
          { icon: "❤️", title: "Valores", text: "Participación, inclusión y perspectiva infantil" }
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              padding: 4,
              borderRadius: 4,
              background: "white",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "all 0.3s ease",
              border: `2px solid ${theme.primary}20`,
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: `0 20px 40px ${theme.primary}20`,
              },
            }}
          >
            <Typography variant="h2" sx={{ mb: 2, animation: "bounce 2s infinite" }}>
              {item.icon}
            </Typography>
            <Typography variant="h5" fontWeight="bold" color={theme.primary} sx={{ mb: 2 }}>
              {item.title}
            </Typography>
            <Typography variant="body1" color={theme.text2}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}