// components/SettingsButton.tsx
"use client";

import { useState } from "react";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsSidebar from "./SettingsSidebar";

const SettingsButton = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}
      >
        <SettingsIcon />
      </IconButton>

      {/* SettingsSidebar */}
      <SettingsSidebar open={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
};

export default SettingsButton;