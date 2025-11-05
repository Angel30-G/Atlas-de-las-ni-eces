export type Theme = {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text1: string;
  text2: string;

  success: string;
  warning: string;
  error: string;
  info: string;
};

export const themes: Record<string, Theme> = {
  fire: {
    name: "fire",
    primary: "#f16f33",
    secondary: "#387bbf",
    background: "#FFF2F2",
    surface: "#FFE5E5",
    text1: "#FFFFFF",
    text2: "#5C1A1A",
    success: "#FFB2B2",
    warning: "#FFDA80",
    error: "#A83232",
    info: "#FFD1D1",
  },

  ocean: {
    name: "ocean",
    primary: "#387bbf",
    secondary: "#a4c42d",
    background: "#F0FCFD",
    surface: "#DFF6F9",
    text1: "#FFFFFF",
    text2: "#1E4A5C",
    success: "#9CE0D4",
    warning: "#FFF0BF",
    error: "#FFA6AC",
    info: "#A3E5FE",
  },

  jungle: {
    name: "jungle",
    primary: "#a4c42d",
    secondary: "#f16f33",
    background: "#F2FCF9",
    surface: "#E1F9EE",
    text1: "#FFFFFF",
    text2: "#2A6657",
    success: "#A4F7CE",
    warning: "#FFF5C2",
    error: "#FFA6A6",
    info: "#B0FFD5",
  },

  candy: {
    name: "candy",
    primary: "#D87AA7",
    secondary: "#F27BB4",
    background: "#FFF9FC",
    surface: "#FFEAF2",
    text1: "#FFFFFF",
    text2: "#702855",
    success: "#FBC7DE",
    warning: "#FFF3CC",
    error: "#FF9BB6",
    info: "#FFD8F5",
  },

  galaxy: {
    name: "galaxy",
    primary: "#A065BB",
    secondary: "#C874E7",
    background: "#FAF4FC",
    surface: "#EFDBF4",
    text1: "#FFFFFF",
    text2: "#4E2078",
    success: "#84F1D0",
    warning: "#FFF4C2",
    error: "#FFA0A0",
    info: "#E4D2FF",
  },
};
