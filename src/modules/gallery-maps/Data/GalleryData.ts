// Interface para tipar las imágenes
export interface GalleryImage {  // ← Agrega 'export'
  id: number;
  src: string;
  title: string;
  description: string;
  region: string;
}

// Datos de la galería
export const galleryImages: GalleryImage[] = [  // ← Agrega 'export'
  {
    id: 1,
    src: "/mapa-prueba.jpg",
    title: "Mapa de San José",
    description: "Los niños representaron los parques y espacios de juego del centro",
    region: "San José"
  },
  {
    id: 2,
    src: "/mapa-prueba.jpg",
    title: "Mapa de Heredia",
    description: "Enfoque en las rutas seguras hacia la escuela",
    region: "Heredia"
  },
  {
    id: 3,
    src: "/mapa-prueba.jpg",
    title: "Mapa de Cartago",
    description: "Los espacios históricos vistos por los más pequeños",
    region: "Cartago"
  },
  {
    id: 4,
    src: "/mapa-prueba.jpg",
    title: "Mapa de Alajuela",
    description: "Los parques y áreas recreativas mapeadas por los niños",
    region: "Alajuela"
  },
  {
    id: 5,
    src: "/mapa-prueba.jpg",
    title: "Mapa de Puntarenas",
    description: "La costa y los espacios de playa desde su perspectiva",
    region: "Puntarenas"
  },
  {
    id: 6,
    src: "/mapa-prueba.jpg",
    title: "Mapa de Guanacaste",
    description: "Los paisajes naturales y culturales de la región",
    region: "Guanacaste"
  },
  {
    id: 7,
    src: "/mapa-prueba.jpg",
    title: "Mapa de Limón",
    description: "La diversidad cultural caribeña en sus dibujos",
    region: "Limón"
  },
  {
    id: 8,
    src: "/mapa-prueba.jpg",
    title: "Mapa de la Zona Norte",
    description: "Las montañas y valles en la imaginación infantil",
    region: "Zona Norte"
  },
];