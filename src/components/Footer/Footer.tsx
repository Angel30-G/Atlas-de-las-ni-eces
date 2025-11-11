"use client";
import { Box, Typography, Stack } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

type footerProps = {
  colored?: boolean;
};

export default function Footer({ colored }: footerProps) {
  const { theme } = useTheme();

  return (
    <Box
      component="footer"
      width="100%"
      px={{ xs: 2, md: 4 }}
      py={{ xs: 6, md: 0 }}
      bgcolor={colored ? theme.primary : theme.primary}
      position="relative"
      overflow="hidden"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      gap={{ xs: 4, md: 0 }}
      minHeight={{ xs: "auto", md: 120 }}
    >
      {/* Bichito: en móvil va EN FLUJO; en desktop es absoluto */}
      <Box
        sx={{
          order: { xs: 0, md: "unset" },
          // En móvil: relativo, ocupa espacio y se centra
          position: { xs: "relative", md: "absolute" },
          top: { md: 8 },
          left: { md: 20 },
          transform: { xs: "none", md: "none" },
          width: { xs: 90, sm: 100, md: 100 },
          height: { xs: 90, sm: 100, md: 100 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          mx: { xs: "auto", md: 0 },
        }}
      >
        <Image
          src="/bicho-lupa.png"
          alt="Atlas de las Niñeces"
          width={95}
          height={95}
          style={{ objectFit: "contain" }}
          priority
        />
      </Box>

      {/* Frase inspiradora */}
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={2}
        textAlign="center"
        sx={{
          zIndex: 2,
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          color={theme.text1}
          sx={{
            maxWidth: { xs: 520, md: 600 },
            fontSize: { xs: "0.9rem", sm: "0.95rem" },
            lineHeight: 1.35,
            transition: "color 0.3s ease",
            "&:hover": { color: "#E0E0E0" },
          }}
        >
          La opinión de las infancias sobre la ciudad es muy importante para la
          planificación y gestión de la ciudad.
        </Typography>
      </Box>

      {/* Contacto */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 4 }}
        alignItems="center"
        justifyContent="center"
        sx={{ zIndex: 2 }}
      >
        {/* Correo */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{
            cursor: "pointer",
            "&:hover .icon": { transform: "rotate(10deg)" },
          }}
          component="a"
          href="mailto:contacto@labexp.com"
          aria-label="Enviar correo a contacto@labexp.com"
        >
          <EmailIcon
            className="icon"
            sx={{ fontSize: 22, color: theme.text1, transition: "transform 0.3s ease" }}
          />
          <Typography
            fontSize="0.9rem"
            fontWeight={500}
            color={theme.text1}
            sx={{
              transition: "text-decoration 0.3s ease, color 0.3s ease",
              "&:hover": { textDecoration: "underline", color: "#E0E0E0" },
            }}
          >
            atlasdelasnineces@gmail.com
          </Typography>
        </Box>

        {/* Instagram */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{
            cursor: "pointer",
            "&:hover .icon": { transform: "rotate(10deg)" },
          }}
          component="a"
          href="https://www.instagram.com/labcomuncr?igsh=MTZ5YmpydHdzcW00Mg=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir Instagram labcomuncr"
        >
          <InstagramIcon
            className="icon"
            sx={{ fontSize: 22, color: theme.text1, transition: "transform 0.3s ease" }}
          />
          <Typography
            fontSize="0.9rem"
            fontWeight={500}
            color={theme.text1}
            sx={{
              transition: "text-decoration 0.3s ease, color 0.3s ease",
              "&:hover": { textDecoration: "underline", color: "#E0E0E0" },
            }}
          >
            @labcomuncr
          </Typography>
        </Box>
      </Stack>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: 140, 
          height: 1,
        }}
      />
    </Box>
  );
}
