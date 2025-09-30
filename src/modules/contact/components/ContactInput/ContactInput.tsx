import { TextField } from "@mui/material";
import { useTheme } from "@/theme/ThemeProvider";

type IContactInput = {
  type: "text" | "email" | "area";
  label: string;
  name: string;
  register: any;
  error?: any;
};

export default function ContactInput({
  type,
  label,
  name,
  register,
  error,
}: IContactInput) {

  const { theme } = useTheme();

  return (
    <TextField
      fullWidth
      multiline={type === "area"}
      rows={type === "area" ? 5 : 1}
      type={type !== "area" ? type : undefined}
      label={label}
      {...register(name, { required: `${label} es requerido` })}
      error={Boolean(error)}
      helperText={error?.message}
      variant="outlined"
      InputLabelProps={{
        style: {
          color: "theme.secondary",
          fontWeight: "700",
          textTransform: "uppercase",
          fontSize: "0.75rem",
          letterSpacing: "0.02em",
        },
      }}
    />
  );
}

