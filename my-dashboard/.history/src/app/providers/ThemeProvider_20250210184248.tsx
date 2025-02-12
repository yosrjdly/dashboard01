"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, Theme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeContextType {
  themeMode: "light" | "dark" | "system";
  setThemeMode: (mode: "light" | "dark" | "system") => void;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark" | "system">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("themeMode") as "light" | "dark" | "system") || "light";
    }
    return "light";
  });

  const [primaryColor, setPrimaryColor] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("primaryColor") || "#673AB7";
    }
    return "#673AB7";
  });

  useEffect(() => {
    if (themeMode === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleChange = () => setThemeMode(mediaQuery.matches ? "dark" : "light");
      mediaQuery.addEventListener("change", handleChange);

      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [themeMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("themeMode", themeMode);
      localStorage.setItem("primaryColor", primaryColor);
    }
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

export const useThemeSettings = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeSettings must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;