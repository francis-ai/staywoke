// src/context/CartContext.js
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("🛒 Adding to cart:", product);

    setCart((prevCart) => {
      console.log("📦 Cart before:", prevCart);

      // check using id + size (if available)
      const existing = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize
      );

      if (existing) {
        console.log("✅ Found existing, increasing qty:", existing);
        return prevCart.map((item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      console.log("✨ New product added:", product);
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id, selectedSize) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(item.id === id && item.selectedSize === selectedSize)
      )
    );
  };

  const updateQty = (id, selectedSize, qty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.selectedSize === selectedSize
          ? { ...item, qty: Math.max(qty, 1) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
