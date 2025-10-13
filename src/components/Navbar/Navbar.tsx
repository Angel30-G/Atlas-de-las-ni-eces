"use client";
import { useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import ColorSelector from "../ColorSelector/ColorSelector";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Divider,
  keyframes,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Animación de flotación
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-7px); }
  100% { transform: translateY(0px); }
`;

// Animación de pulso suave
const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Animación de rotación continua muy lenta
const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export default function Navbar() {
  const { theme, isSmall } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/inicio" },
    { label: "Sobre nosotros", href: "/nosotros" },
    { label: "Créditos", href: "/creditos" },
    { label: "Contacto", href: "/contacto" },
  ];

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "rgba(219, 214, 187, 0.65)",
          color: theme.text1,
          boxShadow: "none",
          fontFamily: "'Josefin Sans', sans-serif",
          px: 2,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", padding: 0 }}>
          <Box>
            <Box 
              sx={{
                position: "relative",
                width: { xs: 110, md: 120 },
                height: { xs: 110, md: 120 },
                marginRight: 2,
                cursor: "pointer",
                // Animación de flotación continua
                animation: `${floatAnimation} 3s ease-in-out infinite`,
                // Efecto al hover
                transition: "all 0.3s ease",
                "&:hover": {
                  animation: `${pulseAnimation} 0.6s ease-in-out`,
                  transform: "scale(1.1)",
                }
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="/logo.png"
                alt="Logo Atlas de las niñeces"
                fill
                style={{ 
                  objectFit: "contain",
                  // Efecto de brillo al hover
                  filter: isHovered ? "brightness(1.2) drop-shadow(0 0 8px rgba(0,0,0,0.3))" : "none",
                  transition: "filter 0.3s ease"
                }}
                priority
              />
            </Box>
          </Box>

          {isSmall ? (
            <IconButton edge="end" onClick={handleDrawerToggle}>
              <MenuIcon sx={{ color: theme.primary }} />
            </IconButton>
          ) : (
            <>
              <Box display="flex" gap={2} alignItems="center">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        padding: "0.75rem 1.5rem",
                        borderBottom: "2px solid",
                        borderColor: theme.primary,
                        borderTopLeftRadius: "1rem",
                        borderTopRightRadius: "1rem",
                        fontFamily: "'Josefin Sans', sans-serif",
                        color: theme.text2,
                        transition: "all 0.3s",
                        "&:hover": {
                          backgroundColor: theme.primary,
                          color: "#fff",
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Box ml={2}>
                <ColorSelector />
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 2,
          }}
          onClick={handleDrawerToggle}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <Link
                  href={item.href}
                  style={{ width: "100%", textDecoration: "none" }}
                >
                  <ListItemButton>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Box px={2} mb={2}>
            <ColorSelector />
          </Box>
        </Box>
      </Drawer>
    </>
  );
}