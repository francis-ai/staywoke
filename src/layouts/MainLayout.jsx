// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/FloatingButton";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar />

      {/* Main content (pushes Footer down) */}
      <Box component="main" sx={{ flex: 1, mt: 0 }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Footer />
       <WhatsAppButton />
    </Box>
  );
};

export default MainLayout;
