"use client";
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { useMediaQuery, CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";

/* 🎨 Paletas de colores del proyecto */
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
    success: "#5C1A1A",
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
    primary: "#7F9429",
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
    primary: "#D1AB4F",
    secondary: "#52235E",
    background: "#FAF4FC",
    surface: "#EFDBF4",
    text1: "#000000",
    text2: "#4E2078",
    success: "#84F1D0",
    warning: "#FFF4C2",
    error: "#FFA0A0",
    info: "#E4D2FF",
  },
};

type ThemeName = "fire" | "ocean" | "jungle" | "candy" | "galaxy";

type ThemeContextType = {
  theme: typeof themes.fire;
  changeTheme: (color: ThemeName) => void;
  isSmall: boolean;
};

const LOCAL_STORAGE_KEY = "selectedTheme";
export const themeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(themeContext);
  if (!context) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(themes.fire);
  const isSmall = useMediaQuery("(max-width:895px)");

  /* Recuperar tema guardado en localStorage */
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeName | null;
    if (saved && themes[saved]) setTheme(themes[saved]);
  }, []);

  const changeTheme = (color: ThemeName) => {
    const newTheme = themes[color];
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY, color);
  };

  /* ===========================
     🎨 Configuración de MUI Theme con Josefin Sans
     =========================== */
  const muiTheme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "'Josefin Sans', sans-serif",
        },
        palette: {
          primary: { main: theme.primary },
          secondary: { main: theme.secondary },
          background: { default: theme.background },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              "html, body": {
                fontFamily: "'Josefin Sans', sans-serif",
              },
              "*": {
                fontFamily: "'Josefin Sans', sans-serif !important",
              },
            },
          },
        },
      }),
    [theme]
  );

  return (
    <themeContext.Provider value={{ theme, changeTheme, isSmall }}>
      <MUIThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </themeContext.Provider>
  );
};
