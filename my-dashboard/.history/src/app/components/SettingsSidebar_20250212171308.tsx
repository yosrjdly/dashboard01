"use client";

import { Drawer, IconButton, Typography, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
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
  const { primaryColor, setPrimaryColor, isDarkMode, toggleDarkMode } = useThemeSettings();

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
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Settings Header */}
        <Typography variant="h5" sx={{ fontWeight: 600, color: "text.primary" }}>
          Settings
        </Typography>

        {/* Dark Mode Toggle (click on icon to toggle) */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            onClick={toggleDarkMode}
            sx={{
              color: isDarkMode ? "#F57C00" : "text.primary",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Brightness4Icon sx={{ fontSize: 28 }} />
          </IconButton>
          <Typography variant="h6" sx={{ color: "text.primary", flex: 1 }}>
            Theme Mode
          </Typography>
        </Box>

        {/* Primary Color Picker */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                  width: 30,
                  height: 10,
                  bgcolor: value,
                  border: primaryColor === value ? "3px solid #1976D2" : "none",
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
