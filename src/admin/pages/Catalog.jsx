import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  TablePagination,
  Snackbar,
  Alert,
} from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../api/ProductApi";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    shortDesc: "",
    longDesc: "",
    sizes: [],
    price: "",
    image: null,
    gallery: [],
  });
  const [sizeInput, setSizeInput] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);

  // View details modal
  const [viewProduct, setViewProduct] = useState(null);
  const [openView, setOpenView] = useState(false);

  // Pagination
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  // Snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Fetch products
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleOpenForm = (product = null) => {
    if (product) {
      setCurrentProduct(product);
      setFormData({
        name: product.name,
        shortDesc: product.shortDesc,
        longDesc: product.longDesc,
        sizes: product.sizes,
        price: product.price,
        image: null,
        gallery: [],
      });
    } else {
      setCurrentProduct(null);
      setFormData({
        name: "",
        shortDesc: "",
        longDesc: "",
        sizes: [],
        price: "",
        image: null,
        gallery: [],
      });
    }
    setSizeInput("");
    setOpenForm(true);
  };

  const handleCloseForm = () => setOpenForm(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (name === "gallery") {
        const newGallery = Array.from(files).slice(0, 3 - formData.gallery.length);
        setFormData((prev) => ({
          ...prev,
          gallery: [...prev.gallery, ...newGallery],
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: files[0] }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Sizes handlers
  const handleAddSize = () => {
    if (sizeInput && !formData.sizes.includes(sizeInput)) {
      setFormData((prev) => ({ ...prev, sizes: [...prev.sizes, sizeInput] }));
      setSizeInput("");
    }
  };
  const handleRemoveSize = (size) => {
    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.filter((s) => s !== size),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("shortDesc", formData.shortDesc);
      data.append("longDesc", formData.longDesc);
      data.append("price", formData.price);

      formData.sizes.forEach((s) => data.append("sizes", s)); // array
      if (formData.image) data.append("image", formData.image);

      formData.gallery.forEach((file) => data.append("gallery", file)); // multiple files

      if (currentProduct) {
        await updateProduct(currentProduct._id, data);
        setSnackbar({
          open: true,
          message: "Product updated successfully",
          severity: "success",
        });
      } else {
        await createProduct(data);
        setSnackbar({
          open: true,
          message: "Product added successfully",
          severity: "success",
        });
      }

      handleCloseForm();
      loadProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      setSnackbar({
        open: true,
        message: "Error saving product",
        severity: "error",
      });
    }
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(deleteId);
      setOpenDelete(false);
      loadProducts();
      setSnackbar({
        open: true,
        message: "Product deleted successfully",
        severity: "success",
      });
    } catch (error) {
      console.error("Error deleting product:", error);
      setSnackbar({
        open: true,
        message: "Error deleting product",
        severity: "error",
      });
    }
  };

  const handleViewDetails = (product) => {
    setViewProduct(product);
    setOpenView(true);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Catalog
      </Typography>

      <Button
        variant="contained"
        sx={{ mb: 3, bgcolor: "#000", "&:hover": { bgcolor: "#131212ff" } }}
        onClick={() => handleOpenForm()}
      >
        Add Product
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Short Description</TableCell>
            <TableCell>Sizes</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((product) => (
              <TableRow key={product._id}>
                <TableCell>
                  {product.image ? (
                    <img
                      src={`${BASE_URL}/${product.image}`}
                      alt={product.name}
                      width={50}
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />
                  ) : (
                    "No Image"
                  )}
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.shortDesc}</TableCell>
                <TableCell>
                  {product.sizes.map((s) => (
                    <Chip key={s} label={s} size="small" sx={{ mr: 0.5 }} />
                  ))}
                </TableCell>
                <TableCell>₦{product.price}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenForm(product)}>
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => {
                      setDeleteId(product._id);
                      setOpenDelete(true);
                    }}
                  >
                    <Delete />
                  </IconButton>
                  <IconButton onClick={() => handleViewDetails(product)}>
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <TablePagination
        component="div"
        count={products.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
      />

      {/* Add/Edit Product Modal */}
      <Modal open={openForm} onClose={handleCloseForm}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { md: 500, xs: 270 },
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            {currentProduct ? "Edit Product" : "Add Product"}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Product Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Short Description"
              name="shortDesc"
              value={formData.shortDesc}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Long Description"
              name="longDesc"
              value={formData.longDesc}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            {/* Sizes */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
              <TextField
                label="Add Size"
                value={sizeInput}
                onChange={(e) => setSizeInput(e.target.value)}
              />
              <Button variant="outlined" onClick={handleAddSize}>
                Add
              </Button>
            </Box>
            <Box sx={{ mb: 2 }}>
              {formData.sizes.map((s) => (
                <Chip
                  key={s}
                  label={s}
                  onDelete={() => handleRemoveSize(s)}
                  sx={{ mr: 0.5 }}
                />
              ))}
            </Box>

            {/* Price */}
            <TextField
              fullWidth
              label="Price"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            {/* Main Image */}
            <Button
              variant="contained"
              component="label"
              sx={{ mb: 2, bgcolor: "#000" }}
            >
              Upload Image
              <input type="file" hidden name="image" onChange={handleChange} />
            </Button>
            {formData.image && (
              <Box sx={{ mb: 2 }}>
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="preview"
                  width={100}
                  height={100}
                  style={{ borderRadius: "50%" }}
                />
              </Box>
            )}
    
            {/* Gallery Images (3 fixed inputs) */}
            <Box sx={{ mb: 2 }}>
              {[0, 1, 2].map((i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <Button variant="outlined" component="label">
                    Upload Image {i + 1}
                    <input
                      type="file"
                      hidden
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setFormData((prev) => {
                            const newGallery = [...prev.gallery];
                            newGallery[i] = file; // assign file to specific index
                            return { ...prev, gallery: newGallery };
                          });
                        }
                      }}
                    />
                  </Button>
                  {formData.gallery[i] && (
                    <img
                      src={URL.createObjectURL(formData.gallery[i])}
                      alt={`gallery-${i}`}
                      width={80}
                      height={80}
                      style={{ borderRadius: "8px" }}
                    />
                  )}
                </Box>
              ))}
            </Box>

            <Button type="submit" variant="contained" sx={{ bgcolor: "#000" }}>
              {currentProduct ? "Update" : "Add"}
            </Button>
          </form>
        </Box>
      </Modal>

      {/* Delete Confirmation */}
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this product?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
          <Button color="error" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* View Details Modal */}
      <Modal open={openView} onClose={() => setOpenView(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { md: 500, xs: 300 },
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          {viewProduct && (
            <>
              <Typography variant="h5" sx={{ mb: 2 }}>
                {viewProduct.name}
              </Typography>
              <img
                src={`${BASE_URL}/${viewProduct.image}`}
                alt={viewProduct.name}
                width={150}
                height={150}
                style={{ borderRadius: "50%", mb: 2 }}
              />
              <Typography variant="subtitle1">
                Short Description: {viewProduct.shortDesc}
              </Typography>
              <Typography variant="subtitle1">
                Long Description: {viewProduct.longDesc}
              </Typography>
              <Typography variant="subtitle1">
                Price: ₦{viewProduct.price}
              </Typography>
              <Typography variant="subtitle1">Sizes:</Typography>
              <Box sx={{ mb: 2 }}>
                {viewProduct.sizes.map((s) => (
                  <Chip key={s} label={s} size="small" sx={{ mr: 0.5 }} />
                ))}
              </Box>
              <Typography variant="subtitle1">Gallery Images:</Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {viewProduct.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={`${BASE_URL}/${img}`}
                    alt={`gallery-${idx}`}
                    width={80}
                    height={80}
                    style={{ borderRadius: "8px" }}
                  />
                ))}
              </Box>
            </>
          )}
        </Box>
      </Modal>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
