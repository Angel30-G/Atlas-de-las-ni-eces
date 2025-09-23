"use client";

import { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/theme/ThemeProvider";
import LoaderScreen from "@/components/Loader"; // Tu loader

export default function LayoutWithLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack overflow="hidden">
      <ThemeProvider>
        {loading ? (
          <LoaderScreen />
        ) : (
          <>
            <Navbar />
            {children}
          </>
        )}
      </ThemeProvider>
    </Stack>
  );
}
