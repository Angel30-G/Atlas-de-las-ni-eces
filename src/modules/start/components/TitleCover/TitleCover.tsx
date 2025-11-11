"use client";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@/theme/ThemeProvider";

type Props = {
  coverSrc: string; 
};

export default function TitleCover({ coverSrc }: Props) {
  const { theme } = useTheme();

  return (
    <Box
      sx={{      
        position: "relative",
        overflow: "visible",       
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 2, md: 4 },
        }}
      >
        <Stack alignItems="center" spacing={4}>
          {/* === Título como imagen === */}
          <Box
            sx={{
              position: "relative",
              width: { xs: 320, md: 680 },
              height: { xs: 70, md: 130 },
            }}
          >
            <Image
              src="/Group 36885.png"   
              alt="ATLAS de las NIÑECES"
              fill
              priority
              sizes="(max-width: 900px) 320px, 680px"
              style={{ objectFit: "contain" }}
            />
          </Box>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 380, md: 620 }, 
              overflow: "visible",
            }}
          >
            <Image
              src={coverSrc}            
              alt="Portada Atlas"
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: "contain",   
                objectPosition: "center",
                transform: "scale(1.08)",           
                transformOrigin: "center",
                pointerEvents: "none",
              }}
              draggable={false}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
