import { Stack, Typography } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";

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
        maxWidth={"85%"}
        textAlign={"center"}
      >
        Descubre nuestra galería de imágenes
      </Typography>
      <Typography
        variant={isSmall ? "body1" : "h6"}
        textAlign="center"
        mt={4}
        mb={8}
      >
        {text}
      </Typography>
      <Stack maxWidth={"100%"}>
        <ImageGallery
          items={images}
          showFullscreenButton
          showPlayButton
          infinite
          additionalClass="gallery"
          showIndex
        />
      </Stack>
      <Image
        src="/assets/vectors/picture.svg"
        alt="foto"
        width={isSmall ? 70 : 100}
        height={isSmall ? 70 : 100}
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          transform: "rotate(21deg)",
        }}
      />
    </Stack>
  );
}
