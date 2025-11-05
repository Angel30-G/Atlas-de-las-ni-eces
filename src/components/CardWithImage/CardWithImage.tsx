import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
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
  backgroundImage?: string; // Nueva prop para imagen de fondo
}

export default function CardWithImage({
  title,
  subheader,
  image,
  description,
  href,
  backgroundImage = "/assets/images/default-card-bg.png", // Imagen de fondo por defecto
}: CardWithImageProps) {
  const { theme } = useTheme();
  const storageKey = `liked-${title}`;
  const [liked, setLiked] = React.useState<boolean>(false);
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 500,
        minHeight: 400,
        boxShadow: isHovered ? 6 : 3,
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        border: `2px solid ${isHovered ? theme.primary : 'transparent'}`,
        background: backgroundImage 
          ? `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${backgroundImage})`
          : "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        '&:hover': {
          boxShadow: `0 12px 40px ${theme.primary}40`,
        },
      }}
    >
      {/* Imagen principal */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 200,
          flexShrink: 0,
          overflow: "hidden",
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
            transition: "transform 0.3s ease",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />

        {/* Badge de like */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
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
            cursor: "pointer",
            transition: "all 0.3s ease",
            '&:hover': {
              transform: "scale(1.1)",
            },
          }}
        >
          <Button onClick={toggleLike} sx={{ minWidth: 'auto', p: 1 }}>
            {liked ? (
              <FavoriteIcon sx={{ color: theme.primary, fontSize: 20 }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: theme.primary, fontSize: 20 }} />
            )}
          </Button>
        </Box>

        {/* Overlay de gradiente para mejor legibilidad del texto */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background: "linear-gradient(transparent, rgba(0,0,0,0.3))",
          }}
        />
      </Box>

      {/* Contenido */}
      <CardContent sx={{ 
        padding: 3, 
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        zIndex: 2,
      }}>
        <Box>
          {/* Encabezado con estilo similar a la imagen */}
          <Box sx={{ mb: 2 }}>
            <Typography 
              variant="h6" 
              fontWeight="bold"
              sx={{
                color: theme.primary,
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                mb: 0.5,
              }}
            >
              {title.split(' - ')[0]} {/* ZONA ALAJUELA */}
            </Typography>
            
            <Typography
              variant="caption"
              sx={{
                color: theme.text2,
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 300,
                display: 'block',
                mb: 1,
              }}
            >
              {subheader || "Actualizado recientemente"}
            </Typography>

            {/* Nombre de la escuela */}
            <Typography
              variant="body1"
              fontWeight="600"
              sx={{
                color: theme.primary,
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: '0.95rem',
              }}
            >
              {title.includes(' - ') ? title.split(' - ')[1] : title}
            </Typography>
          </Box>

          {/* Descripción */}
          <Typography 
            variant="body2" 
            sx={{ 
              lineHeight: 1.5,
              color: theme.text2,
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: '0.9rem',
            }}
          >
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          </Typography>
        </Box>

        {/* Botones - estilo compacto */}
        <Stack 
          direction="row" 
          spacing={1}
          sx={{ marginTop: 2 }}
        >
          <Link href={href} passHref style={{ flex: 1, textDecoration: "none" }}>
            <Button
              variant="contained"
              fullWidth
              endIcon={<SearchIcon />}
              sx={{
                backgroundColor: theme.primary,
                fontWeight: 600,
                fontSize: "0.85rem",
                color: theme.text1,
                borderRadius: 2,
                textTransform: "none",
                py: 1,
                minHeight: "40px",
                fontFamily: "'Josefin Sans', sans-serif",
                letterSpacing: '0.5px',
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: theme.secondary,
                  transform: "translateY(-2px)",
                  boxShadow: `0 4px 12px ${theme.primary}40`,
                },
              }}
            >
              Explorar
            </Button>
          </Link>

          {/* Botón de descarga compacto */}
          <Box>
            <DownloadButton elements={documentsAlajuela} type="icon" />
          </Box>
        </Stack>
      </CardContent>

      {/* Efecto de borde en hover */}
      {isHovered && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: `3px solid ${theme.secondary}`,
            borderRadius: 3,
            pointerEvents: "none",
            opacity: 0.3,
          }}
        />
      )}
    </Card>
  );
}