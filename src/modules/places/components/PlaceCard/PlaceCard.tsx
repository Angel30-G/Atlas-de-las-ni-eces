"use client";

import DownloadButton from "@/components/DownloadButton";
import { useTheme } from "@/theme/ThemeProvider";
import { Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import { documentsAlajuela, documentsLiberia } from "@/modules/documents";

type placeCardProps = {
  place: "Alajuela" | "Liberia";
  school: string;
};

export default function PlaceCard({ place, school }: placeCardProps) {
  const { theme, isSmall } = useTheme();

  const documents = place === "Alajuela" ? documentsAlajuela : documentsLiberia;

  return (
    <Stack
      width="100%"
      p={2}
      borderRadius={4}
      bgcolor={theme.primary}
      position={"relative"}
    >
      <Stack
        p={3}
        borderRadius={4}
        sx={{ border: `3px dotted ${theme.background}` }}
      >
        <Typography
          variant={isSmall ? "h4" : "h3"}
          color="white"
        >{`Niñeces mapeando ${place}`}</Typography>

        <Stack
          direction={isSmall ? "column" : "row"}
          justifyContent={"space-between"}
          mt={3}
          gap={2}
        >
          <Box
            component="span"
            px={1.5}
            py={1.2}
            borderRadius={2}
            bgcolor={theme.background}
            sx={{
              display: "inline-flex",
              width: "fit-content",
            }}
          >
            <Typography
              variant={isSmall ? "body1" : "h5"}
              color={theme.text2}
              whiteSpace="nowrap"
            >
              {`Escuela ${school}`}
            </Typography>
          </Box>

          <Box width={"200"} height={50}>
            <DownloadButton type="textIcon" elements={documents} />
          </Box>
        </Stack>

        <Image
          src="/assets/vectors/school.svg"
          alt="escuela"
          width={isSmall ? 70 : 100}
          height={isSmall ? 70 : 100}
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            transform: "rotate(21deg)",
          }}
        />
      </Stack>
    </Stack>
  );
}
