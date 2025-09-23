"use client";
import { useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import ColorSelector from "../ColorSelector/ColorSelector";
import Link from "next/link";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const { theme, isSmall } = useTheme();

  const [drawerOpen, setDrawerOpen] = useState(false);

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
          bgcolor: "white",
          color: theme.text1,
          boxShadow: "none",
          px: 2,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", padding: 0 }}>
          <Box
            sx={{
              backgroundColor: theme.primary,
              py: 1,
              px: 2,
              borderRadius: "1.5rem",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  md: "1.25rem",
                },
                fontWeight: {
                  xs: "500",
                  md: "bold",
                },
              }}
            >
              Niñeces Mapeando
            </Typography>
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
