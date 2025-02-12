"use client";

import { Drawer, IconButton, Typography, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import PaletteIcon from "@mui/icons-material/Palette";
import { useThemeSettings } from "../providers/ThemeProvider";

// Color options
const colorOptions = [
  { value: "#673AB7" },
  { value: "#1976D2" },
  { value: "#388E3C" },
  { value: "#D32F2F" },
  { value: "#F57C00" },
];

// SettingsSidebar component
const SettingsSidebar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { themeMode, setThemeMode, primaryColor, setPrimaryColor, isDarkMode } = useThemeSettings();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 320,
          p: 3,
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          borderLeft: "2px solid #ddd",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            color: "text.secondary",
            "&:hover": {
              backgroundColor: "transparent",
              color: "text.primary",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Settings Header */}
        <Typography variant="h5" sx={{ fontWeight: 700, color: "text.primary", mb: 2 }}>
          Settings
        </Typography>

        {/* Theme Mode Buttons */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2, borderRadius: 2, bgcolor: "action.hover" }}>
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            Theme Mode
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Light Mode Button */}
            <Button
              onClick={() => setThemeMode("light")}
              sx={{
                flex: 1,
                bgcolor: themeMode === "light" ? "primary.main" : "background.paper",
                color: themeMode === "light" ? "primary.contrastText" : "text.primary",
                "&:hover": {
                  bgcolor: themeMode === "light" ? "primary.dark" : "action.hover",
                },
                transition: "all 0.3s ease",
              }}
              startIcon={<Brightness7Icon />}
            >
              Light
            </Button>

            {/* Dark Mode Button */}
            <Button
              onClick={() => setThemeMode("dark")}
              sx={{
                flex: 1,
                bgcolor: themeMode === "dark" ? "primary.main" : "background.paper",
                color: themeMode === "dark" ? "primary.contrastText" : "text.primary",
                "&:hover": {
                  bgcolor: themeMode === "dark" ? "primary.dark" : "action.hover",
                },
                transition: "all 0.3s ease",
              }}
              startIcon={<Brightness4Icon />}
            >
              Dark
            </Button>
          </Box>
        </Box>

        {/* Primary Color Picker */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2, borderRadius: 2, bgcolor: "action.hover" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <PaletteIcon sx={{ color: "text.primary" }} />
            <Typography variant="h6" sx={{ color: "text.primary", flex: 1 }}>
              Primary Color
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {colorOptions.map(({ value }) => (
              <Button
                key={value}
                sx={{
                  borderRadius: "50%",
                  width: 30, // Smaller width
                  height: 30, // Smaller height
                  minWidth: 0, // Ensure no minimum width
                  minHeight: 0, // Ensure no minimum height
                  padding: 0, // Remove default padding
                  bgcolor: value,
                  border: primaryColor === value ? "2px solid #1976D2" : "none",
                  boxShadow: primaryColor === value ? "0 0 10px rgba(0, 0, 0, 0.2)" : "none",
                  "&:hover": {
                    boxShadow: "0 0 12px rgba(0, 0, 0, 0.3)",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={() => setPrimaryColor(value)}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SettingsSidebar;