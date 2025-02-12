"use client";

import { useState } from "react";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsSidebar from "./SettingsSidebar";

const SettingsButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          backgroundColor: "primary.main",
          color: "white",
          ":hover": { backgroundColor: "primary.dark" },
          boxShadow: 3,
          zIndex: 1300, // Ensures it's above other elements
        }}
      >
        <SettingsIcon />
      </IconButton>

      <SettingsSidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default SettingsButton;