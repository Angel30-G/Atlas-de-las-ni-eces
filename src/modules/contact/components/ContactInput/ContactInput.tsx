"use client";

import { Box, TextField, Typography } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";

type Props = {
  type: "text" | "email" | "area";
  label: string;
  name: string;
  register: any;
  rules?: any;
  error?: any;
};

export default function ContactInput({
  type,
  label,
  name,
  register,
  rules,
  error,
}: Props) {
  const { theme } = useTheme();

  return (
    <Box>
      <Typography
        sx={{
          color: theme.primary,
          fontWeight: 800,
          fontStyle: "italic",
          letterSpacing: "0.02em",
          mb: 1,
        }}
      >
        {label}
      </Typography>

      <TextField
        fullWidth
        multiline={type === "area"}
        rows={type === "area" ? 6 : 1}
        type={type !== "area" ? type : undefined}
        {...register(name, rules)}
        error={Boolean(error)}
        helperText={error?.message}
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: theme.secondary,
            borderRadius: 999,
            px: 2,
            "& fieldset": { border: "none" },
            "&:hover fieldset": { border: "none" },
            "&.Mui-focused fieldset": { border: "none" },
          },
          "& .MuiInputBase-input": {
            py: type === "area" ? 2 : 1.2,
          },
        }}
      />
    </Box>
  );
}
