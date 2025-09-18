// src/api/authApi.js
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

// Create axios instance
const api = axios.create({
  baseURL: `${BASE_URL}/api/auth`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// -------- AUTH ENDPOINTS --------

// Login
export const loginAdmin = async (email, password) => {
  const { data } = await api.post("/login", { email, password });
  return data;
};

// Change password
export const changePassword = async (email, oldPassword, newPassword) => {
  const { data } = await api.post("/change-password", {
    email,
    oldPassword,
    newPassword,
  });
  return data;
};

// Logout (just clear token client-side for now)
export const logoutAdmin = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminInfo");
};
