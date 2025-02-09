"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Typography } from "@mui/material";
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
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: "#2D3436", // Dark background color
          color: "white",
          paddingTop: "20px", // Space for logo
          borderRight: "none", // No border
        },
      }}
    >
      <Box sx={{ padding: "0 16px", marginBottom: "20px", textAlign: "center" }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", fontSize: "20px" }}>
          LOGO
        </Typography>
      </Box>

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <Link href={item.path} passHref style={{ width: "100%" }}>
              <ListItemButton
                sx={{
                  borderRadius: "8px",
                  backgroundColor: pathname === item.path ? "#4b5765" : "transparent",
                  "&:hover": { backgroundColor: "#4b5765" },
                  padding: "12px 16px",
                  marginBottom: "8px",
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "white" }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
