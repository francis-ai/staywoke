// src/pages/Catalog.jsx
import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/Catalog.css";

import { getProducts } from "../api/ProductApi"; // ✅ fetch from API
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Catalog = ({ limit }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    loadProducts();
  }, []);

  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 6,
        mt: 0,
        backgroundColor: "#eeeeeee8",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="700"
        gutterBottom
        textAlign="center"
        sx={{ mb: 4, fontFamily: "'Poppins', sans-serif" }}
      >
        Our Catalog
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {displayedProducts.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={3}>
            <Box className="modern-card">
              <img
                src={`${BASE_URL}/${product.image}`} // ✅ build image URL
                alt={product.name}
                className="modern-img"
              />

              {/* Overlay on hover */}
              <Box className="modern-overlay">
                <div className="overlay-text">
                  <h3>{product.name}</h3>
                  {/* ✅ Only shortDesc shown */}
                  <p className="desc">{product.shortDesc}</p>
                  <p className="price">₦{product.price.toLocaleString()}</p>
                </div>

                {/* View Product Button */}
                <Button
                  component={Link}
                  to={`/product/${product._id}`}
                  variant="contained"
                  sx={{
                    mt: 1,
                    bgcolor: "#FFF",
                    color: "#000",
                    borderRadius: "12px",
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": { bgcolor: "#ece9e9ff" },
                  }}
                >
                  View Product
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Show "View More" if limited */}
      {limit && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            component={Link}
            to="/catalog"
            variant="outlined"
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            View More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Catalog;
