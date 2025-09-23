"use client";
import React from "react";
import Loader from "react-js-loader";
import { useTheme } from "@/theme/ThemeProvider";

export default function LoaderScreen() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader
        type="bubble-top"
        bgColor={theme.primary}
        title={"Cargando..."}
        color={theme.primary}
        size={100}
      />
    </div>
  );
}
