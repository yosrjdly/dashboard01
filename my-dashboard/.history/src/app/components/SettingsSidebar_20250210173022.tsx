"use client";

import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "../providers/ThemeProvider";

const colors = ["#009688", "#FF5722", "#3F51B5", "#E91E63", "#4CAF50"];

export default function SettingsSidebar() {
  const { primaryColor, setPrimaryColor } = useTheme();

  return (
    <Box sx={{ width: 250, p: 2, bgcolor: "black", color: "white" }}>
      <Typography variant="h6">Settings</Typography>

      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        Select Primary Color:
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
        {colors.map((color) => (
          <Button
            key={color}
            onClick={() => setPrimaryColor(color)}
            sx={{
              width: 30,
              height: 30,
              minWidth: 30,
              bgcolor: color,
              border: primaryColor === color ? "2px solid white" : "none",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
