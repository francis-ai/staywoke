import axios from "axios";

const API_URL = "https://staywoke-backend.onrender.com/api/products"; // adjust if needed

// Get products
export const getProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

// Create product
export const createProduct = async (formData) => {
  const res = await axios.post(API_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// Update product
export const updateProduct = async (id, formData) => {
  const res = await axios.put(`${API_URL}/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// Delete product
export const deleteProduct = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
