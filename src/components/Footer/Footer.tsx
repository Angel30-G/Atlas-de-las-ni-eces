"use client";
import { Box, Typography } from "@mui/material";
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
      width="100%"
      px={{ xs: 2, md: 4 }}
      py={{ xs: 6, md: 0 }}
      bgcolor={colored ? theme.primary : theme.primary} // ✅ fondo theme.primary
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      gap={{ xs: 3, md: 0 }}
      position="relative"
      height={{ xs: "auto", md: 120 }}
    >
      {/* */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 6, md: 8 },
          left: { xs: "50%", md: 20 },
          transform: { xs: "translateX(-50%)", md: "none" },
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          zIndex: 10,
        }}
      >
        <Image
          src="/bicho-lupa.png" 
          alt="Atlas de las Niñeces"
          width={85}
          height={85}
          style={{ objectFit: "contain" }}
        />
      </Box>

      {/* Frase inspiradora */}
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={2}
        mt={{ xs: 2, md: 0 }}
      >
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          color="white"
          textAlign="center"
          sx={{
            maxWidth: { xs: "100%", sm: 500 },
            fontSize: { xs: "0.85rem", sm: "0.95rem" },
            transition: "color 0.3s ease",
            "&:hover": { color: "#E0E0E0" },
          }}
        >
          La opinión de las infancias sobre la ciudad es muy importante para la
          planificación y gestión de la ciudad.
        </Typography>
      </Box>

      {/*Contacto */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={3}
        sx={{
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* Correo */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{
            cursor: "pointer",
            "&:hover .icon": {
              transform: "rotate(10deg)",
            },
          }}
        >
          <EmailIcon
            className="icon"
            sx={{
              fontSize: 22,
              color: "white",
              transition: "transform 0.3s ease",
            }}
          />
          <Typography
            fontSize="0.9rem"
            fontWeight="500"
            color="white"
            sx={{
              transition: "text-decoration 0.3s ease, color 0.3s ease",
              "&:hover": {
                textDecoration: "underline",
                color: "#E0E0E0",
              },
            }}
          >
            contacto@labexp.com
          </Typography>
        </Box>

        {/* Instagram */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{
            cursor: "pointer",
            "&:hover .icon": {
              transform: "rotate(10deg)",
            },
          }}
        >
          <InstagramIcon
            className="icon"
            sx={{
              fontSize: 22,
              color: "white",
              transition: "transform 0.3s ease",
            }}
          />
          <Typography
            fontSize="0.9rem"
            fontWeight="500"
            color="white"
            sx={{
              transition: "text-decoration 0.3s ease, color 0.3s ease",
              "&:hover": {
                textDecoration: "underline",
                color: "#E0E0E0",
              },
            }}
          >
            @WaiDanYuan
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
