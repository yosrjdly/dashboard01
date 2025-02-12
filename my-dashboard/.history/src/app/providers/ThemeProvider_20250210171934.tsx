"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, Theme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext<any>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark" | "system">("light");
  const [primaryColor, setPrimaryColor] = useState<string>("#673AB7");

  // Load settings from LocalStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") as "light" | "dark" | "system";
    const savedColor = localStorage.getItem("primaryColor");

    if (savedMode) setThemeMode(savedMode);
    if (savedColor) setPrimaryColor(savedColor);
  }, []);

  // Save settings when they change
  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
    localStorage.setItem("primaryColor", primaryColor);
  }, [themeMode, primaryColor]);

  const theme: Theme = createTheme({
    palette: {
      mode: themeMode === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : themeMode,
      primary: { main: primaryColor },
    },
  });

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, primaryColor, setPrimaryColor }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeSettings = () => useContext(ThemeContext);
export default ThemeProvider;
