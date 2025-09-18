// src/pages/Checkout.jsx
import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import { useCart } from "../context/CartContext";

const WHATSAPP_NUMBER = "2348159227696"; // ✅ Replace with your WhatsApp number
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Checkout = () => {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("⚠️ Please fill in all fields before checkout.");
      return;
    }

    // ✅ Prepare cart items for WhatsApp message with size
    const cartDetails = cart
      .map(
        (item) =>
          `• ${item.name}${item.selectedSize ? ` (${item.selectedSize})` : ""} (x${
            item.qty
          }) - ₦${Number(item.price || 0).toLocaleString()}`
      )
      .join("\n");

    const message = `🛒 *New Order* 

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📍 Address: ${formData.address}

🛍️ *Order Details:*
${cartDetails}

💰 Total: ₦${Number(total || 0).toLocaleString()}`;

    // ✅ Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 6, mt: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 4 }}
        >
          Checkout
        </Typography>

        {/* Customer Info */}
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Delivery Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          multiline
          rows={3}
          sx={{ mb: 3 }}
        />

        <Divider sx={{ my: 3 }} />

        {/* Order Summary */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Order Summary
          </Typography>
          {cart.length > 0 ? (
            cart.map((item) => (
              <Grid
                key={item.id + (item.selectedSize || "")}
                container
                spacing={2}
                alignItems="center"
                sx={{
                  border: "1px solid #eee",
                  borderRadius: 2,
                  p: 1.5,
                  mb: 2,
                }}
              >
                {/* Product Image */}
                <Grid item xs={3}>
                  <Box
                    component="img"
                    src={`${BASE_URL}/${item.image}`}
                    alt={item.name}
                    sx={{
                      width: "100%",
                      height: 70,
                      borderRadius: 2,
                      objectFit: "cover",
                    }}
                  />
                </Grid>

                {/* Product Info */}
                <Grid item xs={9}>
                  <Typography fontWeight="600">{item.name}</Typography>
                  {item.selectedSize && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontStyle: "italic" }}
                    >
                      Size: {item.selectedSize}
                    </Typography>
                  )}
                  <Typography variant="body2" color="text.secondary">
                    Qty: {item.qty}
                  </Typography>
                  <Typography fontWeight="600" color="primary">
                    ₦{Number(item.price || 0).toLocaleString()}
                  </Typography>
                </Grid>
              </Grid>
            ))
          ) : (
            <Typography color="text.secondary">
              Your cart is empty 🛒
            </Typography>
          )}
          <Divider sx={{ my: 2 }} />
          <Typography fontWeight="bold" variant="h6">
            Total: ₦{Number(total || 0).toLocaleString()}
          </Typography>
        </Box>

        {/* Checkout Button */}
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
            bgcolor: "#25D366",
            "&:hover": { bgcolor: "#1ebe5a" },
          }}
          onClick={handleCheckout}
        >
          ✅ Place Order via WhatsApp
        </Button>
      </Box>
    </Container>
  );
};

export default Checkout;
