const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const {
  createProductValidator,
  updateProductValidator,
} = require("../validators/product");
const validateRequest = require("../middlewares/validateRequest");

router.post(
  "/products",
  createProductValidator,
  validateRequest,
  createProduct
);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.put(
  "/products/:id",
  updateProductValidator,
  validateRequest,
  updateProduct
);
router.delete("/products/:id", deleteProduct);

module.exports = router;
