"use client";

import { AppBar, Toolbar, IconButton, InputBase, Box, Typography, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LanguageIcon from "@mui/icons-material/Language";
import { useThemeSettings } from "../providers/ThemeProvider";
import { useState } from "react";

// Navbar component
const Navbar = () => {
  const { themeMode, setThemeMode, isDarkMode } = useThemeSettings();
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // Handle language menu open
  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  // Handle language menu close
  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  // Handle language change
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    handleLanguageMenuClose();
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "background.default", boxShadow: "none",width
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "action.hover",
            borderRadius: 2,
            p: 1,
            width: "40%",
          }}
        >
          <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
          <InputBase
            placeholder="Search..."
            sx={{ color: "text.primary", flex: 1 }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>

        {/* Right Side Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Theme Switching Icon */}
          <IconButton
            onClick={() => setThemeMode(isDarkMode ? "light" : "dark")}
            sx={{ color: "text.primary" }}
            aria-label="toggle theme"
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* Language Switching Icon */}
          <IconButton
            onClick={handleLanguageMenuOpen}
            sx={{ color: "text.primary" }}
            aria-label="change language"
          >
            <LanguageIcon />
          </IconButton>

          {/* Language Menu */}
          <Menu
            anchorEl={languageAnchorEl}
            open={Boolean(languageAnchorEl)}
            onClose={handleLanguageMenuClose}
          >
            <MenuItem onClick={() => handleLanguageChange("English")}>English</MenuItem>
            <MenuItem onClick={() => handleLanguageChange("French")}>French</MenuItem>
            <MenuItem onClick={() => handleLanguageChange("Spanish")}>Spanish</MenuItem>
          </Menu>

          {/* Selected Language Display */}
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            {selectedLanguage}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;