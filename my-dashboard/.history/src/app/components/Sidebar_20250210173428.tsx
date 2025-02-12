"use client";

import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { useThemeSettings } from "../providers/ThemeProvider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";
import BarChartIcon from "@mui/icons-material/BarChart";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const menuItems = [
  { text: "Tableau de bord", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Colis", icon: <LocalShippingIcon />, path: "/colis" },
  { text: "Commandes", icon: <ShoppingCartIcon />, path: "/commandes" },
  { text: "Site Web", icon: <LanguageIcon />, path: "/site-web" },
  { text: "Stock", icon: <StoreIcon />, path: "/stock" },
  { text: "Paiement", icon: <PaymentIcon />, path: "/paiement" },
  { text: "Gestion", icon: <BarChartIcon />, path: "/gestion" },
  { text: "Data", icon: <DataUsageIcon />, path: "/data" },
  { text: "Support", icon: <SupportAgentIcon />, path: "/support" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { primaryColor, themeMode } = useThemeSettings();

  const isDarkMode = themeMode === "dark" || (themeMode === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        bgcolor: isDarkMode ? "#121212" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#000000",
        "& .MuiDrawer-paper": {
          width: 250,
          bgcolor: isDarkMode ? "#121212" : "#ffffff",
        },
      }}
    >
      <Box sx={{ height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src="/favicon.ico" alt="Logo" width={50} />
      </Box>
      <List>
        {menuItems.map(({ text, icon, path }) => {
          const isActive = pathname === path;
          return (
            <ListItemButton
              key={text}
              selected={isActive}
              sx={{
                borderRadius: 2,
                bgcolor: isActive ? primaryColor : "transparent",
                "&:hover": { bgcolor: isActive ? primaryColor : isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)" },
              }}
            >
              <ListItemIcon sx={{ color: isActive ? "white" : isDarkMode ? "#bbbbbb" : "#444444" }}>{icon}</ListItemIcon>
              <ListItemText primary={text} sx={{ color: isActive ? "white" : isDarkMode ? "#bbbbbb" : "#444444" }} />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}
