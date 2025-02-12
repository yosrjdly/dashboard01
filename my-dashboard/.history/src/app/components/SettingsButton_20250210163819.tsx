"use client";

import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import SettingsSidebar from "./SettingsSidebar";

export default function SettingsButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)} sx={{ position: "fixed", top: 16, right: 16 }}>
        <SettingsIcon />
      </IconButton>
      <SettingsSidebar open={open} setOpen={setOpen} />
    </>
  );
}
