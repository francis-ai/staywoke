// src/pages/Cart.jsx
import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  IconButton,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../context/CartContext";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6, mt: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 4, fontFamily: "'Poppins', sans-serif" }}
        >
          Your Cart
        </Typography>

        {cart.length === 0 ? (
          <Typography textAlign="center" color="text.secondary">
            Your cart is empty 🛒
          </Typography>
        ) : (
          <>
            <Grid container spacing={3}>
              {cart.map((item) => (
                <Grid
                  item
                  xs={12}
                  key={`${item.id}-${item.selectedSize || "default"}`} // ✅ unique key
                  sx={{
                    border: '1px solid #eee',
                    borderRadius: 3,
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Product Image */}
                  <Box
                    component="img"
                    src={`${BASE_URL}/${item.image}`}
                    alt={item.name}
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 2,
                      objectFit: 'cover',
                      mr: 2,
                    }}
                  />

                  {/* Product Info */}
                  <Box sx={{ flex: 1 }}>
                    <Typography fontWeight="600">{item.name}</Typography>

                    {/* Show size if available */}
                    {item.selectedSize && (
                      <Typography variant="body2" color="text.secondary">
                        Size: {item.selectedSize}
                      </Typography>
                    )}

                    <Typography color="text.secondary">
                      ₦{item.price.toLocaleString()}
                    </Typography>

                    {/* Quantity Controls */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() =>
                          updateQty(item.id, item.selectedSize, item.qty - 1) // ✅ pass size
                        }
                      >
                        –
                      </Button>
                      <Typography sx={{ mx: 2 }}>{item.qty}</Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() =>
                          updateQty(item.id, item.selectedSize, item.qty + 1) // ✅ pass size
                        }
                      >
                        +
                      </Button>
                    </Box>
                  </Box>

                  {/* Remove Button */}
                  <IconButton
                    color="error"
                    onClick={() => removeFromCart(item.id, item.selectedSize)} // ✅ pass size
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              ))}
            </Grid>

            {/* Cart Total */}
            <Divider sx={{ my: 4 }} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography fontSize="1.2rem" fontWeight="600">
                Total
              </Typography>
              <Typography fontSize="1.4rem" fontWeight="700" color="primary">
                ₦{total.toLocaleString()}
              </Typography>
            </Box>

            {/* Checkout Button */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 600,
                }}
                onClick={() => navigate("/checkout")} // ✅ no reload, context preserved
              >
                Proceed to Checkout
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Cart;
