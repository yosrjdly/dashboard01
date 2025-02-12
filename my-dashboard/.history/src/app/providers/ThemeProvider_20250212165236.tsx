"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Define the type for the theme context
interface ThemeContextType {
  themeMode: "light" | "dark" | "system";
  setThemeMode: (mode: "light" | "dark" | "system") => void;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | null>(null);

// ThemeProvider component
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark" | "system">("light");
  const [primaryColor, setPrimaryColor] = useState<string>("#673AB7");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(themeMode === "dark");

  // Load saved theme settings from localStorage on initial render
  useEffect(() => {
    const savedThemeMode = localStorage.getItem("themeMode") as "light" | "dark" | "system";
    const savedPrimaryColor = localStorage.getItem("primaryColor");
    if (savedThemeMode) setThemeMode(savedThemeMode);
    if (savedPrimaryColor) setPrimaryColor(savedPrimaryColor);
  }, []);

  // Save theme settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
    localStorage.setItem("primaryColor", primaryColor);
  }, [themeMode, primaryColor]);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
    setIsDarkMode((prev) => !prev);
  };

  // Create the MUI theme
  const theme = createTheme({
    palette: {
      mode: themeMode === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : themeMode,
      primary: { main: primaryColor },
    },
  });

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, primaryColor, setPrimaryColor, isDarkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useThemeSettings = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeSettings must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
