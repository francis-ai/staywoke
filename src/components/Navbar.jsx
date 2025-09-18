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
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../context/CartContext"; 
import Logo from '../assets/images/logo.png'

// 🎨 Theme Colors (easy to edit later)
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
  const { cart } = useCart(); // ✅ get cart from context

  // ✅ safe fallback in case cart is undefined
  const cartItems = cart || [];

  // ✅ count total items (respect qty if exists)
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.qty || 1),
    0
  );

  return (
    <>
      {/* Top Navbar */}
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
            {/* Logo Image */}
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{
                width: 40,
                height: 40,
                mr: 1, // space between logo and text
              }}
            />

            {/* Brand Name */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#000",
              }}
            >
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

            {/* Cart Icon */}
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

          {/* Mobile Toggle Button */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: themeColors.text }}
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Sidebar Drawer */}
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
        {/* Close Button inside Sidebar */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon sx={{ color: themeColors.primary }} />
          </IconButton>
        </Box>

        {/* Sidebar Links */}
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

          <Divider sx={{ my: 1 }} />

          {/* Cart link in sidebar */}
          <ListItem
            button
            component={Link}
            to="/cart"
            onClick={() => setIsOpen(false)}
            sx={{
              borderRadius: "8px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#f0f4ff",
                transform: "translateX(6px)",
              },
            }}
          >
            <ListItemText
              primary={`Cart (${cartCount})`}
              sx={{
                "& span": {
                  fontWeight: 600,
                  color: themeColors.primary,
                },
              }}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;