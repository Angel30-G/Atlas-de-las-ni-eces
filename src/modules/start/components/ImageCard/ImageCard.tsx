"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@/theme/ThemeProvider";

interface ImageCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ImageCard({ title, description, image }: ImageCardProps) {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        maxWidth: 360,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "'Josefin Sans', sans-serif",
        gap: 2,
        px: { xs: 1, md: 2 },
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        fontFamily={"'Josefin Sans', sans-serif"}
        color={theme.primary}
      >
        {title}
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "3 / 4", 
          borderRadius: 3,
          overflow: "hidden",
          fontFamily: "'Josefin Sans', sans-serif",
          boxShadow: 3,
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Typography
        variant="body1"
        color={theme.text2}
        sx={{ mt: 1 }}
      >
        {description}
      </Typography>
    </Box>
  );
}
