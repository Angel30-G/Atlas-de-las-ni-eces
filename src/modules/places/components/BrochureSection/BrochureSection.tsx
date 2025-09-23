import { Stack, Typography, Button } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import { Download as DownloadIcon } from '@mui/icons-material';

type BrochureSectionProps = {
  brochureLink: string;
  pdfDownloadLink?: string;
  pdfName?: string; // Nueva prop para el nombre del archivo
};

export default function BrochureSection({
  brochureLink,
  pdfDownloadLink,
  pdfName = "brochure" // Valor por defecto
}: BrochureSectionProps) {
  const { theme, isSmall } = useTheme();

  const handleDownload = () => {
    if (pdfDownloadLink) {
      const link = document.createElement('a');
      link.href = pdfDownloadLink;
      link.download = `${pdfName}.pdf`; // Usamos el nombre proporcionado
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Stack
      width={"100%"}
      marginX={"auto"}
      display={"flex"}
      alignItems={"center"}
      position={"relative"}
      mt={10}
      mb={3}
    >
      <Typography
        variant={isSmall ? "h4" : "h3"}
        fontWeight="bold"
        color={theme.primary}
        mb={10}
        textAlign={"center"}
      >
        Obten más información en nuestro brochure
      </Typography>

      <iframe
        id="brochure-liberia"
        width="100%"
        height="600px"
        src={brochureLink}
      ></iframe>
      
  
    </Stack>
  );
}