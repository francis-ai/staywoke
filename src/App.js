import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import { CartProvider } from "./context/CartContext";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Index";
import Catalog from "./pages/Catalog";
import Contact from "./pages/ContactUs";
import About from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/ProductPage";
import FlashScreen from "./components/FlashScreen";

import AdminApp from "./AdminApp";

// Wrapper to decide when to show FlashScreen
function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Auto-finish flash after mount (but only for non-admin routes)
  useEffect(() => {
    if (location.pathname.startsWith("/admin")) {
      setLoading(false); // disable flash on admin
    }
  }, [location.pathname]);

  if (loading) {
    return <FlashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <Box className="App">
      {/* Bubble Background */}
      {!location.pathname.startsWith("/admin") && (
        <Box className="bubbles">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}></span>
          ))}
        </Box>
      )}

      {/* User frontend routes */}
      <CartProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </CartProvider>

      {/* Admin routes - no flash, no bubbles */}
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
