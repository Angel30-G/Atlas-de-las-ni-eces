"use client";
import * as React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Link from "next/link";
import { useTheme } from "@/theme/ThemeProvider";

export interface CardWithImageProps {
  title: string;
  image: string;
  href: string;
  backgroundImage?: string;
  backgroundSize?: React.CSSProperties["backgroundSize"];
  backgroundPosition?: React.CSSProperties["backgroundPosition"];
  backgroundRepeat?: React.CSSProperties["backgroundRepeat"];
  enableSoftOverlay?: boolean;
  tintBackgroundWithThemeSecondary?: boolean;
}

export default function CardWithImage({
  title,
  image,
  href,
  backgroundImage = "/assets/images/default-card-bg.png",
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
  enableSoftOverlay = false,
  tintBackgroundWithThemeSecondary = false,
}: CardWithImageProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 500,
        minHeight: 360,
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        transition: "transform .3s ease",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: "none",
        ...(backgroundImage && !tintBackgroundWithThemeSecondary
          ? {
              backgroundImage: `linear-gradient(${theme.background}F2, ${theme.background}F2), url(${backgroundImage})`,
              backgroundRepeat: `no-repeat, ${backgroundRepeat}`,
              backgroundSize: `auto, ${backgroundSize}`,
              backgroundPosition: `0 0, ${backgroundPosition}`,
            }
          : {
              backgroundColor: theme.background,
            }),
      }}
    >
      {tintBackgroundWithThemeSecondary && backgroundImage && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            backgroundColor: theme.secondary,
            maskImage: `url(${backgroundImage})`,
            WebkitMaskImage: `url(${backgroundImage})`,
            maskRepeat: backgroundRepeat || "no-repeat",
            WebkitMaskRepeat: backgroundRepeat || "no-repeat",
            maskSize: backgroundSize || "cover",
            WebkitMaskSize: backgroundSize || "cover",
            maskPosition: backgroundPosition || "center",
            WebkitMaskPosition: backgroundPosition || "center",
            opacity: 1,
          }}
        />
      )}

      {enableSoftOverlay && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(80% 80% at 50% 40%, ${theme.background}00 0%, ${theme.background}66 70%, ${theme.background}99 100%)`,
            zIndex: 0,
          }}
        />
      )}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 220,
          overflow: "hidden",
          backgroundColor: theme.background,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${image})`,
            backgroundSize: isHovered ? "105% 105%" : "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "background-size .45s ease",
            willChange: "background-size",
          }}
        />

        <Box
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -2,
            left: 0,
            right: 0,
            height: "38%",
            background: `linear-gradient(to bottom, ${theme.background}F2, ${theme.background}00)`,
          }}
        />
        <Box
          sx={{
            pointerEvents: "none",
            position: "absolute",
            bottom: -2,
            left: 0,
            right: 0,
            height: "38%",
            background: `linear-gradient(to top, ${theme.background}F2, ${theme.background}00)`,
          }}
        />
        <Box
          sx={{
            pointerEvents: "none",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 2,
            backgroundColor: theme.background,
          }}
        />
      </Box>

      <CardContent
        sx={{
          p: 3,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          backgroundColor: theme.background,
          zIndex: 1,
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: theme.primary,
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>

        <Link href={href} style={{ textDecoration: "none", width: "100%" }}>
          <Button
            variant="contained"
            fullWidth
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              borderRadius: 999,
              textTransform: "none",
              fontWeight: 600,
              px: 2.5,
              py: 1.1,
              backgroundColor: theme.primary,
              color: theme.text1,
              fontFamily: "'Josefin Sans', sans-serif",
              transition: "all .3s ease",
              "& .MuiSvgIcon-root": { transition: "transform .2s ease" },
              "&:hover .MuiSvgIcon-root": { transform: "translateX(2px)" },
              "&:hover": {
                backgroundColor: theme.secondary,
                boxShadow: `0 4px 12px ${theme.primary}40`,
              },
            }}
          >
            explorar
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}