"use client";

import { Drawer, IconButton, Typography, Box, Button, Switch, FormControlLabel } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
        }}
      >
        <IconButton onClick={onClose} sx={{ position: "absolute", top: 20, right: 20, color: "text.secondary" }}>
          <CloseIcon />
        </IconButton>

        {/* Settings Header */}
        <Typography variant="h5" sx={{ fontWeight: 600, color: "text.primary" }}>
          Settings
        </Typography>

        {/* Dark Mode Toggle */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2, color: "text.primary" }}>
            Theme Mode
          </Typography>
          <FormControlLabel
            control={<Switch checked={isDarkMode} onChange={toggleDarkMode} />}
            label={isDarkMode ? "Dark Mode" : "Light Mode"}
            sx={{ color: "text.secondary" }}
          />
        </Box>

        {/* Primary Color Picker */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2, color: "text.primary" }}>
            Primary Color
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {colorOptions.map(({ value }) => (
              <Button
                key={value}
                sx={{
                  borderRadius: "50%",
                  width: 45,
                  height: 45,
                  bgcolor: value,
                  border: primaryColor === value ? "3px solid #000" : "none",
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
