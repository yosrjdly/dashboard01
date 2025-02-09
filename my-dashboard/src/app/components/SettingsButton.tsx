"use client";
import { Button, Box, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import SettingsModal from "./SettingsModal"; // Assuming SettingsModal is the modal component

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", padding: "20px" }}>
      {/* Your Dashboard content goes here */}

      {/* Settings Button at the bottom-right */}
      <IconButton
        onClick={handleOpenModal}
        sx={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#2D9596",
          color: "white",
          borderRadius: "50%",
          padding: "12px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "#265073",
          },
        }}
      >
        <SettingsIcon />
      </IconButton>

      {/* Settings Modal */}
      <SettingsModal open={openModal} onClose={handleCloseModal} />
    </Box>
  );
}
