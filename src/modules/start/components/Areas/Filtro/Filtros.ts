// Interfaces para tipado
export interface School {
  id: number;
  title: string;
  subheader: string;
  image: string;
  description: string;
  href: string;
  province: string;
  canton: string;
  schoolName: string;
}

// Interface para los cantones
export interface CantonesByProvince {
  [key: string]: string[];
}