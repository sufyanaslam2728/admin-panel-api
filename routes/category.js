const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  createCategory,
  updateCategory,
  getCategoryById,
  deleteCategory,
} = require("../controllers/category");
const {
  createCategoryValidator,
  updateCategoryValidator,
} = require("../validators/category");
const validateRequest = require("../middlewares/validateRequest");

router.post(
  "/category",
  createCategoryValidator,
  validateRequest,
  createCategory
);
router.get("/category", getAllCategories);
router.get("/category:id", getCategoryById);
router.put(
  "/category:id",
  updateCategoryValidator,
  validateRequest,
  updateCategory
);
router.delete("/category:id", deleteCategory);

module.exports = router;
