"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@/theme/ThemeProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

interface CardWithIconProps {
  title: string;
  description: string;
}

export default function CardWithIcon({
  title,
  description,
}: CardWithIconProps) {
  const { theme } = useTheme();

  const getIcon = () => {
    if (title.toLowerCase().includes("misión"))
      return <EmojiObjectsIcon fontSize="large" htmlColor={theme.primary} />;
    if (title.toLowerCase().includes("visión"))
      return <StarIcon fontSize="large" htmlColor={theme.primary} />;
    if (title.toLowerCase().includes("valores"))
      return <FavoriteIcon fontSize="large" htmlColor={theme.primary} />;
    return <StarIcon fontSize="large" htmlColor={theme.primary} />;
  };

  return (
    <Card
      sx={{
        maxWidth: "100%",
        maxHeight: 350,
        backgroundColor: "#fff",
        borderRadius: 3,
        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        overflow: "hidden",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-15px)",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        marginTop: 2,
      }}
    >
      <div className="pt-6">{getIcon()}</div>

      <div
        style={{
          padding: "0.75rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          textAlign={"center"}
          sx={{ color: theme.primary }}
        >
          {title}
        </Typography>
      </div>

      <CardContent>
        <Typography
          variant="body1"
          textAlign={"center"}
          sx={{ color: "text.secondary" }}
          borderTop={`3px solid ${theme.primary}`}
          paddingY={2}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
