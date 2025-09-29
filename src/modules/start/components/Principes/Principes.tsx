"use client";
import { Stack } from "@mui/material";
import CardWithIcon from "@/components/CardWithIcon/CardWithIcon";
import { useTheme } from "@/theme/ThemeProvider";

export default function Principes() {
  const { theme } = useTheme();

  return (
    <Stack
      justifyContent="center"
      sx={{
        backgroundColor: theme.background,
        width: "100%",
        minHeight: 320,
        py: { sm: 8, md: 12 },
        px: { sm: 2, md: 4 },
        position: "relative",
      }}
    >
      <Stack alignItems="center" width="100%">
        <Stack
          direction={{ sm: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          sx={{
            position: { sm: "relative", md: "absolute" },
            top: { sm: 0, md: -56 },
            zIndex: 20,
            width: {
              xs: "95%",
              sm: "90%",
              md: "75%",
            },
            maxWidth: "1200px",
            gap: { sm: 4, md: 5 },
            paddingY: 2,
          }}
        >
          <CardWithIcon
            title="Actividades"
            description="A través de talleres participativos realizados en escuelas públicas de distintas localidades del país, facilitados por población estudiantil del TEC junto a personas extensionistas y docentes."
          />
          <CardWithIcon
            title="Logros"
            description="Se recopilan mapas, dibujos y narrativas creadas por niños y niñas entre los 9 y 10 años, que reflejan sus vivencias, preocupaciones, deseos y vínculos con el espacio público."
          />
          <CardWithIcon
            title="Metodología"
            description="La metodología utilizada se basa en el mapeo participativo o cartografía social, una herramienta crítica que permite a las comunidades representar colectivamente su experiencia territorial. "
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
