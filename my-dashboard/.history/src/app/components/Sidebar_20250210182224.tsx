"use client";

import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { useThemeSettings } from "@mui/material/styles"; // Import the theme hook
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";
import BarChartIcon from "@mui/icons-material/BarChart";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useThemeSettings } from "../providers/ThemeProvider";

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
  const theme = useThemeSettings(); // Access the theme
  const activeColor = "#4CAF50"; // Green color for active item

  return (
    <Drawer variant="permanent" sx={{ width: 250, bgcolor: "black" }}>
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
                bgcolor: isActive ? activeColor : "transparent",
                "&:hover": { bgcolor: isActive ? activeColor : "rgba(255, 255, 255, 0.1)" },
                color: isActive ? "white" : "gray", // Ensures consistent text color
              }}
            >
              <ListItemIcon sx={{ color: isActive ? "white" : "gray" }}>{icon}</ListItemIcon>
              <ListItemText primary={text} sx={{ color: isActive ? "white" : "gray" }} />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}
