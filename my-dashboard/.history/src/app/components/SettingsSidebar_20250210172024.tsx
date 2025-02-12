"use client";

import { Drawer, Box, Typography, IconButton, ToggleButton, ToggleButtonGroup } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useThemeSettings } from "../providers/ThemeProvider";

const primaryColors = ["#673AB7", "#E91E63", "#FFC107", "#4CAF50", "#2196F3"];

const SettingsSidebar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { themeMode, setThemeMode, primaryColor, setPrimaryColor } = useThemeSettings();

  return (
    <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { width: 320, padding: 2 } }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Theme Customizer</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Primary Color Selection */}
      <Typography sx={{ mt: 2, fontWeight: "bold" }}>Primary Color</Typography>
      <Box display="flex" gap={1} mt={1}>
        {primaryColors.map((color) => (
          <Box
            key={color}
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: color,
              border: primaryColor === color ? "3px solid black" : "2px solid transparent",
              cursor: "pointer",
            }}
            onClick={() => setPrimaryColor(color)}
          />
        ))}
      </Box>

      {/* Theme Mode Selection */}
      <Typography sx={{ mt: 3, fontWeight: "bold" }}>Mode</Typography>
      <ToggleButtonGroup
        color="primary"
        value={themeMode}
        exclusive
        onChange={(e, newMode) => newMode && setThemeMode(newMode)}
        fullWidth
        sx={{ mt: 1 }}
      >
        <ToggleButton value="light">☀ Light</ToggleButton>
        <ToggleButton value="dark">🌙 Dark</ToggleButton>
        <ToggleButton value="system">💻 System</ToggleButton>
      </ToggleButtonGroup>
    </Drawer>
  );
};

export default SettingsSidebar;
