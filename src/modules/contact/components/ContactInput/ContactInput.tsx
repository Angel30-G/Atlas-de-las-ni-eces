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

const CREAM = "#EBDDBA"; 

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
      {/* LABEL dinamico */}
      <Typography
        sx={{
          color: theme.primary,
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          fontSize: 24,
          lineHeight: 1.1,
          mb: 1,
        }}
      >
        {label}
      </Typography>

      {/* INPUT */}
      <TextField
        fullWidth
        multiline={type === "area"}
        rows={type === "area" ? 6 : 1}
        type={type !== "area" ? type : undefined}
        {...register(name, rules)}
        error={Boolean(error)}
        helperText={error?.message}
        variant="outlined"
        InputProps={{
          sx: {
            backgroundColor: `${CREAM} !important`,
            borderRadius: type === "area" ? 28 : 999,
            px: 2,
            fontFamily: "'Josefin Sans', sans-serif",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none !important",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none !important",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none !important",
            },
            "& input:-webkit-autofill, & textarea:-webkit-autofill": {
              WebkitTextFillColor: "#3B3B3B",
              WebkitBoxShadow: `0 0 0 1000px ${CREAM} inset`,
              boxShadow: `0 0 0 1000px ${CREAM} inset`,
              transition: "background-color 9999s ease-out 0s",
            },
          },
        }}
        sx={{
          "& .MuiInputBase-input": {
            py: type === "area" ? 2 : 1.2,
            fontFamily: "'Josefin Sans', sans-serif",
          },
          "& .MuiFormHelperText-root": {
            fontFamily: "'Josefin Sans', sans-serif",
          },
        }}
      />
    </Box>
  );
}
