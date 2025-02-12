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
      <Box sx={{ width: 300, p: 2, bgcolor: "background.default" }}>
        <IconButton onClick={onClose} sx={{ position: "absolute", top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
          Settings
        </Typography>

        {/* Dark Mode Toggle */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Dark Mode</Typography>
          <FormControlLabel
            control={<Switch checked={isDarkMode} onChange={toggleDarkMode} />}
            label={isDarkMode ? "Dark Mode" : "Light Mode"}
          />
        </Box>

        {/* Primary Color Picker */}
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Primary Color
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          {colorOptions.map(({ value }) => (
            <Button
              key={value}
              sx={{
                borderRadius: "50%",
                width: 40,
                height: 40,
                bgcolor: value,
                border: primaryColor === value ? "2px solid black" : "none",
                "&:hover": { bgcolor: value, boxShadow: "0 0 10px rgba(0,0,0,0.2)" },
              }}
              onClick={() => setPrimaryColor(value)}
            />
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default SettingsSidebar;
