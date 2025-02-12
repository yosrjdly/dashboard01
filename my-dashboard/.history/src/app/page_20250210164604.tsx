"use client";

import Sidebar from "./components/Sidebar";
import SettingsButton from "./components/SettingsButton";
import { Box, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <SettingsButton />
        <Typography variant="h4">Welcome to the Dashboard</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Here is an overview of your data.
        </Typography>
      </Box>
    </Box>
  );
}
