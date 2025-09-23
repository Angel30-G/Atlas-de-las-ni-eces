import { TextField } from "@mui/material";

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
  return (
    <TextField
      fullWidth
      multiline={type === "area"}
      type={type !== "area" ? type : undefined}
      label={label}
      {...register(name, { required: `${label} es requerido` })}
      error={Boolean(error)}
      helperText={error?.message}
      variant="outlined"
      margin="normal"
      style={{ backgroundColor: "#fff", marginBottom: 15 }}
    />
  );
}
