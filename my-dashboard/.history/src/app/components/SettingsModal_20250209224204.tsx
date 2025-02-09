"use client";
import { Modal, Box, Button, Typography, Select, MenuItem } from "@mui/material";
import { useThemeContext } from "../providers/ThemeProvider";
import { useLanguageContext } from "../providers/LanguageProvider";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const SettingsModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { toggleTheme, mode } = useThemeContext();
  const { language, setLanguage } = useLanguageContext();

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6">Settings</Typography>
        
        {/* Theme Toggle */}
        <Button onClick={toggleTheme} sx={{ mt: 2 }}>
          Toggle to {mode === "light" ? "Dark" : "Light"} Mode
        </Button>

        {/* Language Selector */}
        <Typography sx={{ mt: 2 }}>Language</Typography>
        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          fullWidth
          sx={{ mt: 1 }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fr">French</MenuItem>
        </Select>
      </Box>
    </Modal>
  );
};

export default SettingsModal;
