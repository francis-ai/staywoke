import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Container,
  CircularProgress,
  Chip,
  Modal,
} from "@mui/material";
import { ShoppingCart, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { getProductById } from "../api/ProductApi";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);

  // For gallery modal
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ mt: 10, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!product) {
    return (
      <Container sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h6">❌ Product not found.</Typography>
      </Container>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes?.length > 0 && !selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const productToCart = {
      id: product.id || product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      selectedSize,
    };

    addToCart(productToCart);
  };

  const openGalleryModal = (img) => {
    setSelectedGalleryImage(img);
    setGalleryOpen(true);
  };

  const closeGalleryModal = () => {
    setSelectedGalleryImage(null);
    setGalleryOpen(false);
  };

  return (
    <Container sx={{ py: 6, mt: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        {/* Left side: Main Image + Gallery */}
        <Box>
          {/* Main Image */}
          <Box
            component="img"
            src={`${BASE_URL}/${product.image}`}
            alt={product.name}
            sx={{
              width: { xs: "100%", md: 400 },
              borderRadius: 3,
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              mb: 2,
            }}
          />

          {/* Gallery Images */}
          {product.gallery && product.gallery.length > 0 && (
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {product.gallery.map((img, idx) => (
                <Box
                  key={idx}
                  component="img"
                  src={`${BASE_URL}/${img}`}
                  alt={`gallery-${idx}`}
                  width={80}
                  height={80}
                  sx={{
                    borderRadius: 2,
                    border: '1px solid #ccc',
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                  onClick={() => openGalleryModal(img)}
                />
              ))}
            </Box>
          )}
        </Box>

        {/* Right side: Product Info */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {product.name}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {product.shortDesc}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {product.longDesc}
          </Typography>

          {product.sizes && product.sizes.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
                Select Size:
              </Typography>
              {product.sizes.map((s, idx) => (
                <Chip
                  key={idx}
                  label={s}
                  clickable
                  onClick={() => setSelectedSize(s)}
                  color={selectedSize === s ? "primary" : "default"}
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Box>
          )}

          <Typography variant="h5" fontWeight="600" color="#000" sx={{ mb: 3 }}>
            ₦{product.price.toLocaleString()}
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<ShoppingCart size={18} />}
            sx={{
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              bgcolor: "#000",
              color: "#fff",
              "&:hover": { bgcolor: "#333" },
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>

      {/* Gallery Modal */}
      <Modal open={galleryOpen} onClose={closeGalleryModal}>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: { xs: "90%", md: "60%" },
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 0,
      borderRadius: 2,
      outline: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {/* Close button at top-right */}
    <Button
      onClick={closeGalleryModal}
      sx={{
        position: "absolute",
        top: 8,
        right: 8,
        minWidth: "32px",
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        bgcolor: "rgba(0,0,0,0.6)",
        color: "#fff",
        "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
        zIndex: 10,
        p: 0,
      }}
    >
      <X size={16} />
    </Button>

    {/* Centered Image */}
    {selectedGalleryImage && (
      <Box
        component="img"
        src={`${BASE_URL}/${selectedGalleryImage}`}
        alt="gallery-large"
        sx={{
          maxWidth: "100%",
          maxHeight: "80vh",
          borderRadius: 2,
          display: "block",
        }}
      />
    )}
  </Box>
</Modal>
    </Container>
  );
};

export default ProductDetail;
