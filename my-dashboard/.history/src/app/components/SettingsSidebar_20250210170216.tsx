"use client";

import { Drawer, Box, Typography, IconButton, Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const primaryColors = ["#673AB7", "#E91E63", "#FFC107", "#4CAF50", "#2196F3"]; // 5 preset colors

export default function SettingsSidebar({ open, onClose, setPrimaryColor, setThemeMode }: any) {
  const [selectedColor, setSelectedColor] = useState(primaryColors[0]);
  const [themeMode, setLocalThemeMode] = useState("light");
  const theme = useTheme();

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setPrimaryColor(color);
  };

  const handleThemeChange = (_event: React.MouseEvent<HTMLElement>, newMode: string) => {
    if (newMode) {
      setLocalThemeMode(newMode);
      setThemeMode(newMode);
    }
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6">Theme Customizer</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
          Customize & Preview in Real-Time
        </Typography>

        {/* Primary Color Selection */}
        <Typography variant="subtitle1">Primary Color</Typography>
        <Box sx={{ display: "flex", gap: 1, my: 2 }}>
          {primaryColors.map((color) => (
            <Box
              key={color}
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: color,
                border: selectedColor === color ? "3px solid black" : "2px solid white",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </Box>

        {/* Theme Mode Selection */}
        <Typography variant="subtitle1">Mode</Typography>
        <ToggleButtonGroup
          color="primary"
          value={themeMode}
          exclusive
          onChange={handleThemeChange}
          sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
        >
          <ToggleButton value="light">🌞 Light</ToggleButton>
          <ToggleButton value="dark">🌙 Dark</ToggleButton>
          <ToggleButton value="system">💻 System</ToggleButton>
        </ToggleButtonGroup>

        {/* Close Button */}
        <Button
          variant="contained"
          sx={{ mt: "auto", backgroundColor: selectedColor, color: "white", borderRadius: 2 }}
          onClick={onClose}
        >
          Close Settings
        </Button>
      </Box>
    </Drawer>
  );
}
