"use client";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { themes } from "./themes";
import { useMediaQuery } from "@mui/material";

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
  if (!context) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(themes.fire);
  const isSmall = useMediaQuery("(max-width:895px)");

  useEffect(() => {
    const savedThemeName = localStorage.getItem(
      LOCAL_STORAGE_KEY
    ) as ThemeName | null;
    if (savedThemeName && themes[savedThemeName]) {
      setTheme(themes[savedThemeName]);
    }
  }, []);

  const changeTheme = (color: ThemeName) => {
    const newTheme = themes[color];
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY, color);
  };

  return (
    <themeContext.Provider value={{ theme, changeTheme, isSmall }}>
      {children}
    </themeContext.Provider>
  );
};
