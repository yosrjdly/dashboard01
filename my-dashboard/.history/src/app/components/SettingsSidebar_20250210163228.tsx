" use client "
import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import { styled } from "@mui/material/styles";

const colorOptions = ["#6B47DC", "#1E9373", "#E53E3E", "#F7B500", "#2196F3"];

const FloatingButton = styled(IconButton)({
  position: "fixed",
  top: 15,
  right: 15,
  background: "#ffffff",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  "&:hover": { background: "#f0f0f0" },
});

const SettingsSidebar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [primaryColor, setPrimaryColor] = useState("#6B47DC");

  const handleThemeChange = (_: any, newTheme: string | null) => {
    if (newTheme) setTheme(newTheme);
  };

  return (
    <>
      {/* Settings Button */}
      <FloatingButton onClick={() => setOpen(true)}>
        <SettingsIcon />
      </FloatingButton>

      {/* Collapsible Sidebar */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: 300, padding: 2 },
        }}
      >
        <Typography variant="h6" gutterBottom>
          Theme Customizer
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Customize & Preview in Real Time
        </Typography>

        {/* Primary Color Selection */}
        <Box mt={2}>
          <Typography variant="subtitle1">Primary Color</Typography>
          <Box display="flex" gap={1} mt={1}>
            {colorOptions.map((color) => (
              <Box
                key={color}
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: color,
                  cursor: "pointer",
                  border: primaryColor === color ? "3px solid #000" : "none",
                }}
                onClick={() => setPrimaryColor(color)}
              />
            ))}
          </Box>
        </Box>

        {/* Theme Mode Selection */}
        <Box mt={3}>
          <Typography variant="subtitle1">Mode</Typography>
          <ToggleButtonGroup
            value={theme}
            exclusive
            onChange={handleThemeChange}
            sx={{ mt: 1 }}
          >
            <ToggleButton value="light">
              <Brightness7Icon /> Light
            </ToggleButton>
            <ToggleButton value="dark">
              <Brightness4Icon /> Dark
            </ToggleButton>
            <ToggleButton value="system">
              <DesktopWindowsIcon /> System
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Drawer>
    </>
  );
};

export default SettingsSidebar;
