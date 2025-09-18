import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        textAlign: "center",
        background: "linear-gradient(135deg, #1e40af, #2563eb, #3b82f6)", // smoother gradient
        color: "#fff",
        borderRadius: 0,
        mt: 0,
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="800"
        sx={{
          mb: 2,
          fontFamily: "'Poppins', sans-serif",
          fontSize: { xs: "1.8rem", md: "2.5rem" },
        }}
      >
        Ready to Learn More About Us?
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 5,
          opacity: 0.95,
          fontFamily: "'Poppins', sans-serif",
          maxWidth: "600px",
          mx: "auto",
          lineHeight: 1.6,
        }}
      >
        Discover who we are, explore our story, and let’s build something great
        together. We’d love to hear from you!
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
        <Button
          component={Link}
          to="/about"
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: 700,
            textTransform: "none",
            borderRadius: "50px",
            px: 4,
            py: 1.5,
            boxShadow: "0 4px 14px rgba(255,255,255,0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#f9fafb",
              transform: "translateY(-3px) scale(1.05)",
              boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
            },
          }}
        >
          About Us
        </Button>

        <Button
          component={Link}
          to="/contact"
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#fff",
            fontWeight: 700,
            textTransform: "none",
            borderRadius: "50px",
            px: 4,
            py: 1.5,
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
              transform: "translateY(-3px) scale(1.05)",
              borderColor: "#f1f1f1",
            },
          }}
        >
          Contact
        </Button>
      </Box>
    </Box>
  );
};

export default CTA;
