import { Stack, Typography } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";

type videoSectionProps = {
  videoLink: string;
  text: string;
};
export default function VideoSection({ videoLink, text }: videoSectionProps) {
  const { theme, isSmall } = useTheme();
  return (
    <Stack
      width={"100%"}
      marginX={"auto"}
      display={"flex"}
      alignItems={"center"}
      mt={2}
    >
      <Typography
        variant={isSmall ? "h4" : "h3"}
        fontWeight="bold"
        textAlign={"center"}
        color={theme.primary}
      >
        ¿De qué trató la actividad?
      </Typography>
      <Typography
        variant={isSmall ? "body1" : "h6"}
        textAlign={"center"}
        mt={4}
        mb={6}
      >
        {text}
      </Typography>
      <iframe
        width="100%"
        height="550"
        style={{ borderRadius: "1rem" }}
        src={videoLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Stack>
  );
}
