import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import { useTheme } from "@/theme/ThemeProvider";
import DownloadButton from "@/components/DownloadButton";
import { documentsAlajuela } from "@/modules/documents";

interface CardWithImageProps {
  title: string;
  subheader?: string;
  image: string;
  description: string;
  href: string;
}

export default function CardWithImage({
  title,
  subheader,
  image,
  description,
  href,
}: CardWithImageProps) {
  const { theme } = useTheme();
  const storageKey = `liked-${title}`;
  const [liked, setLiked] = React.useState<boolean>(false);

  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored === "true") {
      setLiked(true);
    }
  }, [storageKey]);

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    localStorage.setItem(storageKey, newLiked.toString());
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        width: "100%",
        maxWidth: 900,
        marginBottom: 4,
        boxShadow: 3,
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Imagen */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", lg: 220 },
          height: { xs: 200, lg: "auto" },
          flexShrink: 0,
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            right: 10,
            zIndex: 10,
            backgroundColor: "white",
            borderRadius: "50%",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 2,
          }}
        >
          <Button onClick={toggleLike}>
            {liked ? (
              <FavoriteIcon sx={{ color: "#e53950" }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "#e53950" }} />
            )}
          </Button>
        </Box>
      </Box>

      {/* Contenido */}
      <CardContent sx={{ padding: 3, flex: 1 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>

        {subheader && (
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            {subheader}
          </Typography>
        )}

        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          {description}
        </Typography>

        <Box sx={{ display: "flex", gap: "10px", marginTop: 2 }}>
          <Link
            href={href}
            passHref
            style={{ flex: 3, textDecoration: "none" }}
          >
            <Button
              variant="contained"
              fullWidth
              startIcon={<SearchIcon />}
              sx={{
                backgroundColor: theme.primary,
                fontWeight: 600,
                fontSize: "0.9rem",
                borderRadius: 2,
                textTransform: "none",
                py: 1,
                minHeight: "40px",
                "&:hover": {
                  backgroundColor: theme.secondary,
                },
              }}
            >
              Explorar
            </Button>
          </Link>

          {/* Botón de descarga solo con ícono */}
          <Box sx={{ flex: 1 }}>
            <DownloadButton elements={documentsAlajuela} type="icon" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
