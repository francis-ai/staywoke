import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// 🎨 Theme Colors (same as navbar for consistency)
const themeColors = {
  primary: "#1976d2",
  text: "#333333",
  background: "#f8f9fa",
};

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Catalog", path: "/catalog" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: themeColors.background,
        color: themeColors.text,
        py: 4,
        mt: 0,
        borderTop: "1px solid #e0e0e0",
        textAlign: "center",
      }}
    >
      {/* Nav Links */}
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        sx={{ mb: 2 }}
      >
        {navLinks.map((link) => (
          <Typography
            key={link.name}
            component={Link}
            to={link.path}
            sx={{
              textDecoration: "none",
              color: themeColors.text,
              fontWeight: 500,
              transition: "color 0.3s ease",
              "&:hover": { color: themeColors.primary },
            }}
          >
            {link.name}
          </Typography>
        ))}
      </Stack>

      {/* Social Icons */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mb: 2 }}
      >
        <IconButton
          href="https://facebook.com"
          target="_blank"
          sx={{ color: themeColors.text, "&:hover": { color: themeColors.primary } }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          sx={{ color: themeColors.text, "&:hover": { color: themeColors.primary } }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          sx={{ color: themeColors.text, "&:hover": { color: themeColors.primary } }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://linkedin.com"
          target="_blank"
          sx={{ color: themeColors.text, "&:hover": { color: themeColors.primary } }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>

      {/* Copyright */}
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} stAywOKe. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
