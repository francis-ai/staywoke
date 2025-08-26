import React from "react";
import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = () => {
  const whatsappUrl =
    "https://wa.me/2348143582166?text=Hi%20StayWoke!%20I%20love%20what%20you’re%20building%20🔥";

  return (
    <Box
      component="a"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        bgcolor: "#25D366",
        borderRadius: "50%",
        width: 60,
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        cursor: "pointer",
        zIndex: 1000,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
        },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 35, color: "#fff" }} />
    </Box>
  );
};

export default WhatsAppButton;
