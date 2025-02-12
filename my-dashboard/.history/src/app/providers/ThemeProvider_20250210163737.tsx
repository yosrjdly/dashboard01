"use client";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode, createContext, useState, useContext } from "react";

const ThemeContext = createContext({ toggleTheme: () => {} });

export function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = createTheme({
    palette: { mode },
  });

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
