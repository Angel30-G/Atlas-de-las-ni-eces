"use client";

import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";

type DownloadButtonProps = {
  elements: { name: string; path: string }[];
  type: "icon" | "textIcon";
};

export default function DownloadButton({
  elements,
  type,
}: DownloadButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { theme } = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {type === "icon" ? (
        <IconButton
          onClick={handleClick}
          sx={{
            bgcolor: theme.background,
            color: theme.primary,
            borderRadius: 2,
            width: "100%",
            minWidth: "60px",
            height: "100%",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            "&:hover": {
              bgcolor: "#f0f0f0",
            },
          }}
        >
          <DownloadIcon />
        </IconButton>
      ) : (
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={handleClick}
          sx={{
            bgcolor: theme.background,
            color: theme.primary,
            fontWeight: "bold",
            textTransform: "none",
            px: 3,
            py: 1,
            borderRadius: 2,
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#f3f3f3",
            },
          }}
        >
          Descargar
        </Button>
      )}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: 2,
            px: 1,
            boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
            minWidth: 250,
            mt: 1,
          },
        }}
      >
        {elements.map((file, index) => (
          <MenuItem
            key={index}
            component="a"
            href={file.path}
            download
            onClick={handleClose}
            sx={{
              paddingY: 2,
              color: theme.text2,
              ".MuiListItemIcon-root": {
                color: theme.text2,
              },
            }}
          >
            <ListItemIcon>
              <DownloadIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>{file.name}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
