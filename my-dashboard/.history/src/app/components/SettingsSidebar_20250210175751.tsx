"use client";

import { Drawer, IconButton, Typography, Box, MenuItem, Select } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useThemeSettings } from "../providers/ThemeProvider";

interface SettingsSidebarProps {
  open: boolean;
  onClose: () => void;
}

const colorOptions = [
  { label: "Purple", value: "#673AB7" },
  { label: "Blue", value: "#1976D2" },
  { label: "Green", value: "#388E3C" },
  { label: "Red", value: "#D32F2F" },
  { label: "Orange", value: "#F57C00" },
];

const SettingsSidebar = ({ open, onClose }: SettingsSidebarProps) => {
  const { primaryColor, setPrimaryColor } = useThemeSettings();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 2 }}>
        <IconButton onClick={onClose} sx={{ position: "absolute", top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Settings
        </Typography>

        <Typography>Primary Color:</Typography>
        <Select
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
          fullWidth
          sx={{ mt: 1 }}
        >
          {colorOptions.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              <Box sx={{ width: 20, height: 20, bgcolor: value, display: "inline-block", mr: 1 }} />
              {label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Drawer>
  );
};

export default SettingsSidebar;
