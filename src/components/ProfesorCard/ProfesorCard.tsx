"use client";
import { Avatar, Box, Typography, Card, CardContent } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";

interface ProfesorCardProps {
  profesor: {
    nombre: string;
    unidad: string;
    avatar: string;
  };
}

export default function ProfesorCard({ profesor }: ProfesorCardProps) {
  const { theme } = useTheme();

  return (
    <Card
      sx={{
        backgroundColor: "white",
        borderRadius: 3,
        boxShadow: "none",
        overflow: "hidden",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
        },
        maxHeight: "350px",
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", md: "30%" },
      }}
    >
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src={profesor.avatar}
          alt={profesor.nombre}
          sx={{
            width: 120,
            height: 120,
            mb: 3,
            bgcolor: theme.primary,
            boxShadow: 1,
          }}
        />
      </Box>

      <CardContent sx={{ textAlign: "center", pt: 0 }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: "bold",
            color: "#555",
            mb: 1,
          }}
        >
          {profesor.nombre}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 1,
            borderTop: `2px solid ${theme.primary}`,
            pt: 2,
          }}
        >
          {profesor.unidad}
        </Typography>
      </CardContent>
    </Card>
  );
}
