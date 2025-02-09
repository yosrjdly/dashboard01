"use client";
import { Button } from "@mui/material";
import { useState } from "react";
import SettingsModal from "./SettingsModal";

const SettingsButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ position: "absolute", top: 20, right: 20 }}
      >
        Settings
      </Button>
      <SettingsModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default SettingsButton;
