"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardMedia,
  Modal,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import { useTheme } from "@/theme/ThemeProvider";
import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Interface para tipar las imágenes
interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

// Datos de la galería
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/mapa-prueba.jpg",
    title: "Mapa de San José",
    description: "Descripción del primer mapa realizado por los niños",
  },
  {
    id: 2,
    src: "/mapa-prueba.jpg",
    title: "Mapa de Heredia",
    description: "Descripción del segundo mapa",
  },
  {
    id: 3,
    src: "/mapa-prueba.jpg",
    title: "Mapa de Cartago",
    description: "Descripción del tercer mapa",
  },
  {
    id: 4,
    src: "/mapa-prueba.jpg",
    title: "Mapa de Alajuela",
    description: "Descripción del cuarto mapa",
  },
  {
    id: 5,
    src: "/mapa-prueba.jpg",
    title: "Mapa de Puntarenas",
    description: "Descripción del quinto mapa",
  },
  {
    id: 6,
    src: "/mapa-prueba.jpg",
    title: "Mapa de Guanacaste",
    description: "Descripción del sexto mapa",
  },
];

export default function Gallery() {
  const { isSmall } = useTheme();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      {/* Título de la galería */}
      <Typography
        variant={isSmall ? "h4" : "h2"}
        sx={{
          textAlign: "center",
          mb: 2,
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        Galería de Mapas
      </Typography>
      
      <Typography
        variant={isSmall ? "body1" : "h6"}
        sx={{
          textAlign: "center",
          mb: 6,
          color: "text.secondary",
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        Explora los mapas creados por los niños y niñas que participaron en el proyecto
      </Typography>

      {/* Stack de imágenes */}
      <Stack 
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
      >
        {galleryImages.map((image) => (
          <Box 
            key={image.id} 
            sx={{ 
              width: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(33.333% - 16px)" },
              maxWidth: "400px",
              flexShrink: 0
            }}
          >
            <Card 
              sx={{ 
                cursor: "pointer", 
                transition: "transform 0.3s",
                height: "100%",
                "&:hover": {
                  transform: "scale(1.05)",
                }
              }}
              onClick={() => openLightbox(image)}
            >
              <CardMedia>
                <Box sx={{ position: "relative", height: "250px" }}>
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Box>
              </CardMedia>
              
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {image.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {image.description}
                </Typography>
              </Box>
            </Card>
          </Box>
        ))}
      </Stack>

      {/* Lightbox/Modal - CORREGIDO */}
      <Modal
        open={lightboxOpen}
        onClose={closeLightbox}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box 
          sx={{ 
            position: "relative",
            width: "100%",
            height: "100%",
            maxWidth: "1200px",
            maxHeight: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none"
          }}
        >
          {/* Botón cerrar */}
          <IconButton
            onClick={closeLightbox}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "white",
              zIndex: 10,
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.9)",
              }
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Botón anterior */}
          {selectedImage && (
            <IconButton
              onClick={prevImage}
              sx={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "white",
                zIndex: 10,
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.9)",
                }
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
          )}

          {/* Botón siguiente */}
          {selectedImage && (
            <IconButton
              onClick={nextImage}
              sx={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "white",
                zIndex: 10,
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.9)",
                }
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          )}

          {/* Contenedor de imagen - CORREGIDO */}
          {selectedImage && (
            <Box 
              sx={{ 
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Box 
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  maxWidth: "100%",
                  maxHeight: "100%"
                }}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </Box>
              
              {/* Información de la imagen */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(0,0,0,0.8)",
                  color: "white",
                  p: 3,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {selectedImage.title}
                </Typography>
                <Typography variant="body1">
                  {selectedImage.description}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}