"use client";

import { Drawer, Box, Button, Typography } from "@mui/material";
import { useThemeContext } from "../providers/ThemeProvider";
import { useLanguageContext } from "../providers/LanguageProvider";

export default function SettingsSidebar({ open, setOpen }: { open: boolean; setOpen: (state: boolean) => void }) {
  const { toggleTheme } = useThemeContext();
  const { setLanguage } = useLanguageContext();

  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <Box sx={{ width: 250, p: 2 }}>
        <Typography variant="h6">Theme Settings</Typography>
        <Button variant="contained" onClick={toggleTheme} sx={{ mt: 2 }}>
          Toggle Theme
        </Button>
        <Typography variant="h6" sx={{ mt: 4 }}>Language</Typography>
        <Button variant="outlined" onClick={() => setLanguage("en")} sx={{ mt: 2 }}>
          English
        </Button>
        <Button variant="outlined" onClick={() => setLanguage("fr")} sx={{ mt: 1 }}>
          Français
        </Button>
      </Box>
    </Drawer>
  );
}
