// src/admin/pages/Settings.jsx
import React, { useState } from "react";
import { Box, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";
import { changePassword } from "../../api/AuthApi"; 

export default function Settings() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setSnackbar({
        open: true,
        message: "New password and confirm password do not match",
        severity: "error",
      });
      return;
    }

    try {
      // ✅ Read from correct key
      const admin = JSON.parse(localStorage.getItem("adminInfo"));

      if (!admin?.email) {
        throw new Error("Admin email not found in session. Please login again.");
      }

      await changePassword(admin.email, formData.currentPassword, formData.newPassword);

      setSnackbar({
        open: true,
        message: "Password changed successfully!",
        severity: "success",
      });
      setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });

    } catch (error) {
      setSnackbar({
        open: true,
        message: error.response?.data?.message || error.message || "Failed to change password",
        severity: "error",
      });
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
        Change Password
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type="password"
          label="Current Password"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />
        <TextField
          fullWidth
          type="password"
          label="New Password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />
        <TextField
          fullWidth
          type="password"
          label="Confirm New Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          sx={{ mb: 3 }}
          required
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ bgcolor: "#000", "&:hover": { bgcolor: "#111111ff" } }}
        >
          Update Password
        </Button>
      </form>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
