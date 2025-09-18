import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("adminInfo");
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
  }, []);

  const handleAddProduct = () => {
    navigate("/admin/catalog"); // Navigate to catalog page
  };

  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600, color: "#000" }}>
        Dashboard
      </Typography>

      {admin && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Welcome, {admin.fullname} 👋
          </Typography>
          <Typography variant="body1" sx={{ color: "gray" }}>
            {admin.email}
          </Typography>
        </Box>
      )}

      <Button
        variant="contained"
        sx={{
          bgcolor: "#000",
          "&:hover": { bgcolor: "#0d0d0dff" },
          color: "#fff",
          fontWeight: 600,
          py: 1.5,
          px: 4,
        }}
        onClick={handleAddProduct}
      >
        Add Product to Catalog
      </Button>
    </Box>
  );
}
