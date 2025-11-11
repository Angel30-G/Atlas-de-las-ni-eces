"use client";
import { Stack } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import ImageCard from "@/modules/start/components/ImageCard/ImageCard";

export default function Principes() {
  const { theme } = useTheme();

  return (
    <Stack
      justifyContent="center"
      sx={{
        backgroundColor: theme.background,
        width: "100%",
        py: { sm: 6, md: 10 },
        px: { sm: 2, md: 4 },
      }}
    >
      <Stack alignItems="center" width="100%">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 8, md: 6 }}
          alignItems="stretch"
          justifyContent="center"
          sx={{
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          <ImageCard
            title="Actividades"
            description="A través de talleres participativos realizados en escuelas públicas de distintas localidades del país, facilitados por población estudiantil del TEC junto a personas extensionistas y docentes."
            image="/Actividades.png"
          />

          <ImageCard
            title="Metodología"
            description="La metodología utilizada se basa en el mapeo participativo o cartografía social, una herramienta crítica que permite a las comunidades representar colectivamente su experiencia territorial."
            image="/Metodologia.png"
          />

          <ImageCard
            title="Logros"
            description="Se recopilan mapas, dibujos y narrativas creadas por niños y niñas entre los 9 y 10 años, que reflejan sus vivencias, preocupaciones, deseos y vínculos con el espacio público."
            image="/Logros.png"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
