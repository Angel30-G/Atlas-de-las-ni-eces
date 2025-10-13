"use client";
import { Stack, Typography, Button, Box } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";
import { Download as DownloadIcon, OpenInNew as OpenInNewIcon } from '@mui/icons-material';

type BrochureSectionProps = {
  brochureLink: string;
  pdfDownloadLink?: string;
  pdfName?: string;
};

export default function BrochureSection({
  brochureLink,
  pdfDownloadLink,
  pdfName = "brochure"
}: BrochureSectionProps) {
  const { theme, isSmall } = useTheme();

  const handleDownload = () => {
    if (pdfDownloadLink) {
      const link = document.createElement('a');
      link.href = pdfDownloadLink;
      link.download = `${pdfName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleOpenInNewTab = () => {
    window.open(brochureLink, '_blank', 'noopener,noreferrer');
  };

  // URL del PDF con parámetros para ocultar controles
  const pdfViewUrl = `${brochureLink}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

  return (
    <Stack
      width={"100%"}
      maxWidth={"1400px"}
      marginX={"auto"}
      display={"flex"}
      alignItems={"center"}
      position={"relative"}
      mt={4}
      mb={8}
      px={2}
      spacing={4}
    >
      <Typography
        variant={isSmall ? "h4" : "h3"}
        fontWeight="bold"
        color={theme.primary}
        textAlign={"center"}
        fontFamily={"'Josefin Sans', sans-serif"}
      >
        Obtén más información en nuestro brochure
      </Typography>

      {/* Contenedor del PDF */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Iframe del brochure sin controles*/}
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            height: "600px",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            border: `1px solid ${theme.primary}20`,
          }}
        >
          <iframe
            src={pdfViewUrl}
            width="100%"
            height="100%"
            style={{
              border: "none",
            }}
            title="Brochure Alajuela - Atlas de las Niñeces"
          />
        </Box>

        {/* Contenedor de botones */}
        <Stack 
          direction={{ xs: "column", sm: "row" }} 
          spacing={2} 
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Button
            variant="outlined"
            startIcon={<OpenInNewIcon />}
            onClick={handleOpenInNewTab}
            sx={{
              borderColor: theme.primary,
              color: theme.primary,
              fontWeight: "bold",
              textTransform: "none",
              fontFamily: "'Josefin Sans', sans-serif",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              "&:hover": {
                bgcolor: `${theme.primary}10`,
                borderColor: theme.secondary,
                color: theme.secondary,
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
              transition: "all 0.3s ease",
              fontSize: isSmall ? "0.9rem" : "1rem",
            }}
          >
            Ver en pantalla completa
          </Button>

          {pdfDownloadLink && (
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
              sx={{
                bgcolor: theme.primary,
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                fontFamily: "'Josefin Sans', sans-serif",
                px: 4,
                py: 1.5,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                "&:hover": {
                  bgcolor: theme.secondary,
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                },
                transition: "all 0.3s ease",
                fontSize: isSmall ? "0.9rem" : "1rem",
              }}
            >
              Descargar PDF
            </Button>
          )}
        </Stack>
      </Box>

      <Typography
        variant="body2"
        color={theme.text2}
        textAlign="center"
        sx={{
          maxWidth: "600px",
          fontStyle: "italic",
          fontFamily: "'Josefin Sans', sans-serif",
          mt: 2,
        }}
      >
        Explora nuestro brochure para conocer más sobre el proyecto Atlas de las Niñeces 
        y los resultados obtenidos en la comunidad de Alajuela.
      </Typography>
    </Stack>
  );
}