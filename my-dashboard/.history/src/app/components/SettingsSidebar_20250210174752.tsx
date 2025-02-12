"use client";

import { Drawer, IconButton, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface SettingsSidebarProps {
  open: boolean;
  onClose: () => void;
}

const SettingsSidebar = ({ open, onClose }: SettingsSidebarProps) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 2 }}>
        <IconButton onClick={onClose} sx={{ position: "absolute", top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Settings
        </Typography>

        {/* Settings Content Goes Here */}
        <Typography>Primary Color:</Typography>
        {/* Add color picker or any setting controls here */}
      </Box>
    </Drawer>
  );
};

export default SettingsSidebar;
