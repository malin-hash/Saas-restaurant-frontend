import React from "react";
import { TextField } from "@mui/material";
export default function InputComponent({
  text,
  type,
  formData,
  setFormData,
  title,
}) {
  return (
    <TextField
      label={text}
      type={type}
      variant="outlined"
      fullWidth
      sx={{
        backgroundColor: "white",
      }}
      value={formData.title}
      onChange={(e) => setFormData({ ...formData, [title]: e.target.value })}
    />
  );
}
