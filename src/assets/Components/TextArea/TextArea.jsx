import React from "react";
import { TextField } from "@mui/material";
export default function TextArea({ text, formData, setFormData, title }) {
  return (
    <TextField
      label={text}
      multiline
      minRows={2}
      maxRows={6}
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
