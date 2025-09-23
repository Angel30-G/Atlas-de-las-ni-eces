import { Stack, Typography } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import "react-image-gallery/styles/css/image-gallery.css";
import Link from "next/link";
import Image from "next/image";

type MapSectionProps = {
  mapLink: string;
  text: string;
};

export default function MapSection({ mapLink, text }: MapSectionProps) {
  const { theme, isSmall } = useTheme();

  return (
    <Stack
      width={"100%"}
      marginX={"auto"}
      display={"flex"}
      alignItems={"center"}
      position={"relative"}
      mt={10}
    >
      <Typography
        variant={isSmall ? "h4" : "h3"}
        fontWeight="bold"
        color={theme.primary}
        maxWidth={"80%"}
        textAlign={"center"}
      >
        Explora nuestro mapa interactivo
      </Typography>

      <Typography
        variant={isSmall ? "body1" : "h6"}
        textAlign={"center"}
        mt={4}
        mb={8}
      >
        {text}
      </Typography>

      <iframe
        style={{ borderRadius: "1rem" }}
        width="100%"
        height="500px"
        allowFullScreen
        allow="geolocation"
        src={mapLink}
      />
      <Typography bgcolor={"white"} py={1} px={1.5} borderRadius={2}>
        <Link href={mapLink} style={{ textDecoration: "underline" }}>
          Ver pantalla completa
        </Link>
      </Typography>
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
        }}
      />
    </Stack>
  );
}
