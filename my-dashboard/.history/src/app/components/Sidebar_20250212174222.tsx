"use client";

import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
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

// Menu items
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
  const router = useRouter();
  const { primaryColor } = useThemeSettings();

  return (
    <Drawer variant="permanent" sx={{
      width: 250,
      bgcolor: "background.paper",
      transition: "all 0.3s ease",
      boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
    }}>
      <Box sx={{width:250, height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src="/favicon.ico" alt="Logo" width={40} />
        <Typography variant="h6" sx={{ ml: 2 }}>App Name</Typography>
      </Box>
      
      <List>
        {menuItems.map(({ text, icon, path }) => {
          const isActive = pathname === path;

          const handleNavigation = () => {
            router.push(path);
          };

          return (
            <ListItemButton
              key={text}
              selected={!isActive}
              sx={{
                borderRadius: "0 60px 60px 0", // Rounded corners
                bgcolor: isActive ? primaryColor : "transparent",
                "&:hover": {
                  bgcolor: isActive ? primaryColor : "rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                },
                color: isActive ? "white" : "text.primary",
                transition: "all 0.3s ease",
                padding: "7px 15px",
                margin: "6px 0",
              }}
              onClick={handleNavigation}
            >
              <ListItemIcon sx={{ color: isActive ? "white" : "text.primary", minWidth: "40px" }}>
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  fontWeight: isActive ? "bold" : "normal",
                  fontSize: "16px",
                  letterSpacing: "0.5px",
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}
