"use client";

import { useState } from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Typography, Divider, Box } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
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

// Menu items with submenus
const menuItems = [
  {
    text: "Dashboards",
    icon: <DashboardIcon />,
    subMenu: [
      { text: "CRM", path: "/dashboard/crm" },
      { text: "Analytics", path: "/dashboard/analytics" },
      { text: "eCommerce", path: "/dashboard/ecommerce" },
    ],
  },
  { text: "Academy", path: "/academy", icon: <StoreIcon /> },
  { text: "Logistics", path: "/logistics", icon: <LocalShippingIcon /> },
  {
    text: "Front Pages",
    icon: <LanguageIcon />,
    subMenu: [
      { text: "eCommerce", path: "/front-pages/ecommerce" },
      { text: "Academy", path: "/front-pages/academy" },
      { text: "Logistics", path: "/front-pages/logistics" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { primaryColor } = useThemeSettings();
  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (item) => {
    setOpenMenus((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <Drawer variant="permanent" sx={{ width: 250, bgcolor: "#F8F9FA", borderRight: "1px solid #E0E0E0" }}>
      {/* Logo */}
      <Box sx={{ height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
          MATERIO
        </Typography>
      </Box>

      {/* Main Menu */}
      <List sx={{ paddingX: 1 }}>
        {menuItems.map(({ text, icon, path, subMenu }) => {
          const isActive = pathname === path;
          const hasSubMenu = subMenu && subMenu.length > 0;
          const isOpen = openMenus[text];

          return (
            <Box key={text}>
              <ListItemButton
                onClick={() => (hasSubMenu ? handleToggle(text) : router.push(path))}
                selected={isActive}
                sx={{
                  borderRadius: 2,
                  bgcolor: isActive ? "linear-gradient(135deg, #0E9F6E 0%, #17C2A4 100%)" : "transparent",
                  "&:hover": { bgcolor: isActive ? "linear-gradient(135deg, #0E9F6E 0%, #17C2A4 100%)" : "#E0E0E0" },
                  color: isActive ? "white" : "#333",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemIcon sx={{ color: isActive ? "white" : "#777" }}>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </Box>
                {hasSubMenu && (isOpen ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>

              {/* Submenu */}
              {hasSubMenu && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ paddingLeft: 4 }}>
                    {subMenu.map((sub) => (
                      <ListItemButton
                        key={sub.text}
                        selected={pathname === sub.path}
                        onClick={() => router.push(sub.path)}
                        sx={{
                          borderRadius: 2,
                          color: pathname === sub.path ? "#0E9F6E" : "#777",
                          "&:hover": { bgcolor: "#E0E0E0" },
                        }}
                      >
                        <Box sx={{ width: 8, height: 8, bgcolor: pathname === sub.path ? "#0E9F6E" : "#777", borderRadius: "50%", marginRight: 2 }} />
                        <ListItemText primary={sub.text} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>

      {/* Divider */}
      <Divider sx={{ marginY: 2 }} />

      {/* Apps & Pages Section */}
      <Typography variant="body2" sx={{ paddingLeft: 2, color: "#777", fontWeight: "bold", textTransform: "uppercase" }}>
        Apps & Pages
      </Typography>
      <List sx={{ paddingX: 1 }}>
        <ListItemButton onClick={() => router.push("/apps/ecommerce")}>
          <ListItemIcon sx={{ color: "#777" }}>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="eCommerce" />
        </ListItemButton>
        <ListItemButton onClick={() => router.push("/apps/academy")}>
          <ListItemIcon sx={{ color: "#777" }}>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Academy" />
        </ListItemButton>
        <ListItemButton onClick={() => router.push("/apps/logistics")}>
          <ListItemIcon sx={{ color: "#777" }}>
            <LocalShippingIcon />
          </ListItemIcon>
          <ListItemText primary="Logistics" />
        </ListItemButton>
        <ListItemButton onClick={() => router.push("/apps/email")}>
          <ListItemIcon sx={{ color: "#777" }}>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Email" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
