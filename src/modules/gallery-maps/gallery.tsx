"use client";
import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardMedia,
  Modal,
  IconButton,
  keyframes,
} from "@mui/material";
import Image from "next/image";
import { useTheme } from "@/theme/ThemeProvider";
import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { galleryImages, GalleryImage } from "./Data/GalleryData";

// Animaciones
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.8) rotate(-5deg); }
  to { opacity: 1; transform: scale(1) rotate(0deg); }
`;

const slideIn = keyframes`
  from { transform: translateY(50px) rotateX(45deg); opacity: 0; }
  to { transform: translateY(0) rotateX(0); opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(1deg); }
  66% { transform: translateY(5px) rotate(-1deg); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(0,0,0,0.1); }
  50% { box-shadow: 0 0 20px rgba(100, 181, 246, 0.3); }
`;

export default function AnimatedGallery() {
  const { theme, isSmall } = useTheme(); // ← Agregar 'theme' aquí
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [displayedImages, setDisplayedImages] = useState<GalleryImage[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // Inicializar con 6 imágenes aleatorias
  useEffect(() => {
    shuffleImages();
  }, []);

  const getRandomImages = (count: number) => {
    const shuffled = [...galleryImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const shuffleImages = () => {
    setIsShuffling(true);
    setDisplayedImages([]);
    
    setTimeout(() => {
      const newImages = getRandomImages(6);
      setDisplayedImages(newImages);
      setIsShuffling(false);
    }, 500);
  };

  const gentleShuffle = () => {
    setIsShuffling(true);
    
    setTimeout(() => {
      const imagesToReplace = Math.floor(Math.random() * 2) + 1;
      const newDisplayed = [...displayedImages];
      
      for (let i = 0; i < imagesToReplace; i++) {
        const replaceIndex = Math.floor(Math.random() * newDisplayed.length);
        const availableImages = galleryImages.filter(
          img => !newDisplayed.some(displayed => displayed.id === img.id)
        );
        
        if (availableImages.length > 0) {
          const randomNewImage = availableImages[Math.floor(Math.random() * availableImages.length)];
          newDisplayed[replaceIndex] = randomNewImage;
        }
      }
      
      setDisplayedImages(newDisplayed);
      setIsShuffling(false);
    }, 300);
  };

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

  const getCardAnimation = (index: number) => {
    return `${fadeIn} 0.6s ease-out ${index * 0.1}s both, ${float} 6s ease-in-out ${index * 0.5}s infinite`;
  };

  return (
    <Box sx={{ 
      py: 8, 
      px: { xs: 2, md: 4 },
      backgroundColor: theme.background, // ← Usar color del tema
    }}>
      {/* Header con controles */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant={isSmall ? "h4" : "h2"}
          sx={{
            fontWeight: "bold",
            color: theme.primary, // ← Usar primary del tema
            mb: 2,
          }}
        >
          Explora los mapas creados
        </Typography>
        
        <Typography
          variant={isSmall ? "body1" : "h6"}
          sx={{
            color: theme.text2, // ← Usar text2 del tema
            maxWidth: "800px",
            mx: "auto",
            mb: 4,
          }}
        >
          Apreta el botón para mostrar mapas al azar.
        </Typography>

        <IconButton
          onClick={shuffleImages}
          disabled={isShuffling}
          sx={{
            backgroundColor: theme.secondary, // ← Usar primary del tema
            color: theme.text1, // ← Usar text1 del tema
            animation: `${pulseGlow} 2s ease-in-out infinite`,
            "&:hover": {
              backgroundColor: theme.success, // ← Usar secondary del tema
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <ShuffleIcon />
        </IconButton>
      </Box>

      {/* Galería animada */}
      <Stack 
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
      >
        {displayedImages.map((image, index) => (
          <Box 
            key={`${image.id}-${index}`} 
            sx={{ 
              width: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(33.333% - 16px)" },
              maxWidth: "400px",
              flexShrink: 0,
              animation: getCardAnimation(index),
            }}
          >
            <Card 
              sx={{ 
                cursor: "pointer", 
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                height: "100%",
                background: `linear-gradient(135deg, ${theme.surface} 0%, ${theme.background} 100%)`, // ← Usar surface y background del tema
                overflow: "hidden",
                position: "relative",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: `0 12px 28px ${theme.secondary}20`, // ← Usar primary con transparencia
                  "& .map-overlay": {
                    opacity: 1,
                    transform: "translateY(0)",
                  }
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary}, ${theme.info}, ${theme.success}, ${theme.warning}, ${theme.primary})`, // ← Usar todos los colores del tema
                  backgroundSize: "200% 100%",
                  animation: `${pulseGlow} 3s ease-in-out infinite`,
                  zIndex: 2,
                }
              }}
              onClick={() => openLightbox(image)}
            >
              <CardMedia>
                <Box sx={{ position: "relative", height: "250px", overflow: "hidden" }}>
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  
                  {/* Overlay animado */}
                  <Box
                    className="map-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(45deg, ${theme.primary}70, ${theme.secondary}70)`, // ← Usar primary y secondary con transparencia
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transform: "translateY(10px)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.text1, // ← Usar text1 del tema
                        fontWeight: "bold",
                        textAlign: "center",
                        textShadow: `2px 2px 4px ${theme.text2}80`, // ← Usar text2 con transparencia
                      }}
                    >
                      Ver Mapa
                    </Typography>
                  </Box>
                </Box>
              </CardMedia>
              
              <Box sx={{ p: 2, position: "relative" }}>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{
                    background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`, // ← Usar primary y secondary
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                  }}
                >
                  {image.title}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.text2}}> {/* ← Usar text2 del tema */}
                  {image.description}
                </Typography>
                <Box
                  sx={{
                    display: "inline-block",
                    backgroundColor: theme.secondary, // ← Usar primary del tema
                    color: theme.text1, // ← Usar text1 del tema
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "12px",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  {image.region}
                </Box>
              </Box>
            </Card>
          </Box>
        ))}
      </Stack>

      {/* Indicador de cambio */}
      {isShuffling && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white",
            px: 4,
            py: 2,
            borderRadius: "8px",
            animation: `${fadeIn} 0.3s ease`,
          }}
        >
          <Typography>🎨 Reorganizando mapas...</Typography>
        </Box>
      )}

      {/* Lightbox/Modal */}
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
            outline: "none",
            backgroundColor: theme.background, // ← Usar background del tema
          }}
        >
          {/* Botón cerrar */}
          <IconButton
            onClick={closeLightbox}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              backgroundColor: theme.primary, // ← Usar primary del tema
              color: theme.text1, // ← Usar text1 del tema
              zIndex: 10,
              "&:hover": {
                backgroundColor: theme.secondary, // ← Usar secondary del tema
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
                backgroundColor: theme.primary, // ← Usar primary del tema
                color: theme.text1, // ← Usar text1 del tema
                zIndex: 10,
                "&:hover": {
                  backgroundColor: theme.secondary, // ← Usar secondary del tema
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
                backgroundColor: theme.primary, // ← Usar primary del tema
                color: theme.text1, // ← Usar text1 del tema
                zIndex: 10,
                "&:hover": {
                  backgroundColor: theme.secondary, // ← Usar secondary del tema
                }
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          )}

          {/* Contenedor de imagen */}
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
                  backgroundColor: `${theme.secondary}`, // ← Usar primary con transparencia
                  color: theme.text1, // ← Usar text1 del tema
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