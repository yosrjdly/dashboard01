"use client";

import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box } from "@mui/material";
import { usePathname } from "next/navigation";
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

  return (
    <Drawer variant="permanent" sx={{ width: 250, bgcolor: "black" }}>
      <Box sx={{ height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src="/favicon.ico" alt="Logo" width={50} />
      </Box>
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItemButton key={text} selected={pathname === path} sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
            <ListItemText primary={text} sx={{ color: "white" }} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
