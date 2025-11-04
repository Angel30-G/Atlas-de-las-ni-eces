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
  Divider,
  keyframes,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Animaciones
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-7px); }
  100% { transform: translateY(0px); }
`;
const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export default function Navbar() {
  const { theme, isSmall } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
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
          bgcolor: "#ffffff",
          color: theme.primary,
          boxShadow: "none",
          fontFamily: "'Josefin Sans', sans-serif",
          px: { xs: 1.5, md: 2 },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: 80, p: 0 }}>
          {/* Logo tiene link a inicio*/}
          <Link
            href="/inicio"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 130, md: 150 },
                height: { xs: 130, md: 150 },
                mr: 2,
                cursor: "pointer",
                animation: `${floatAnimation} 3s ease-in-out infinite`,
                transition: "all 0.3s ease",
                "&:hover": {
                  animation: `${pulseAnimation} 0.6s ease-in-out`,
                  transform: "scale(1.06)",
                },
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
                  filter: isHovered
                    ? "brightness(1.15) drop-shadow(0 0 8px rgba(0,0,0,0.15))"
                    : "none",
                  transition: "filter 0.3s ease",
                }}
                priority
              />
            </Box>
          </Link>

          {/* Navegación */}
          {isSmall ? (
            <IconButton edge="end" onClick={handleDrawerToggle}>
              <MenuIcon sx={{ color: theme.primary }} />
            </IconButton>
          ) : (
            <>
              <Box display="flex" alignItems="center">
                {navItems.map((item, idx) => (
                  <Box key={item.href} display="flex" alignItems="center">
                    <Link href={item.href} style={{ textDecoration: "none" }}>
                      <Typography
                        component="span"
                        sx={{
                          px: 2,
                          py: 1,
                          fontFamily: "'Josefin Sans', sans-serif",
                          fontWeight: 600,
                          letterSpacing: 0.2,
                          color: theme.primary,
                          transition: "color .2s ease, transform .2s ease",
                          "&:hover": {
                            color: `${theme.primary}CC`,
                            transform: "translateY(-1px)",
                          },
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Link>

                    {/* Separador vertical */}
                    {idx < navItems.length - 1 && (
                      <Typography
                        aria-hidden
                        sx={{
                          mx: 1,
                          color: `${theme.primary}AA`,
                          userSelect: "none",
                        }}
                      >
                        |
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
              <Box ml={2}>
                <ColorSelector />
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer móvil */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 260,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 2,
            bgcolor: "#fff",
            height: "100%",
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
                    <ListItemText
                      primaryTypographyProps={{
                        fontFamily: "'Josefin Sans', sans-serif",
                        fontWeight: 600,
                        color: theme.primary,
                      }}
                      primary={item.label}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2, borderColor: `${theme.primary}33` }} />

          <Box px={2} mb={2}>
            <ColorSelector />
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
