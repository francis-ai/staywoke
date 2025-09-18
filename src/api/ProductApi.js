// src/api/ProductApi.js
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: `${BASE_URL}/api/products`,
  headers: {
    "Content-Type": "application/json",
  },
});

// attach token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// endpoints
export const getProducts = async () => {
  const { data } = await api.get("/");
  return data;
};

// Fetch a single product by ID
export const getProductById = async (id) => {
  const { data } = await api.get(`/${id}`);
  return data;
};

export const createProduct = async (productData) => {
  const { data } = await api.post("/", productData, {
    headers: { "Content-Type": "multipart/form-data" }, // for file uploads
  });
  return data;
};

export const updateProduct = async (id, productData) => {
  const { data } = await api.put(`/${id}`, productData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await api.delete(`/${id}`);
  return data;
};
