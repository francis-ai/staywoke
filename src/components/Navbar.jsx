// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  // Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../context/CartContext"; 
import Logo from '../assets/images/logo.png';

const themeColors = {
  primary: "#1976d2",
  text: "#333333",
  hover: "#1565c0",
  background: "#ffffff",
  sidebarBg: "#ffffff",
};

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Catalog", path: "/catalog" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const cartItems = cart || [];

  const cartCount = cartItems.reduce(
    (total, item) => total + (item.qty || 1),
    0
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: themeColors.background,
          color: themeColors.text,
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{ width: 40, height: 40, mr: 1 }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
              stAywOKe
            </Typography>
          </Box>

          {/* Desktop Links */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.name}
                component={Link}
                to={link.path}
                sx={{
                  color: themeColors.text,
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: themeColors.primary,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {link.name}
              </Button>
            ))}

            {/* Cart Icon (desktop) */}
            <IconButton
              component={Link}
              to="/cart"
              size="large"
              sx={{ color: themeColors.text }}
            >
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>

          {/* Mobile Actions (Cart + Menu) */}
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            {/* Cart Icon (mobile) */}
            <IconButton
              component={Link}
              to="/cart"
              size="large"
              sx={{ color: themeColors.text }}
            >
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>

            {/* Menu Toggle */}
            <IconButton
              sx={{ color: themeColors.text }}
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: themeColors.sidebarBg,
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
            overflow: "hidden",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon sx={{ color: themeColors.primary }} />
          </IconButton>
        </Box>

        <List sx={{ padding: 2 }}>
          {navLinks.map((link) => (
            <ListItem
              button
              key={link.name}
              component={Link}
              to={link.path}
              onClick={() => setIsOpen(false)}
              sx={{
                borderRadius: "8px",
                marginBottom: "6px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#f0f4ff",
                  transform: "translateX(6px)",
                },
              }}
            >
              <ListItemText
                primary={link.name}
                sx={{
                  "& span": {
                    fontWeight: 500,
                    color: themeColors.text,
                    transition: "color 0.3s ease",
                  },
                  "&:hover span": { color: themeColors.primary },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
