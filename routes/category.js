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

router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);
router.post(
  "/categories",
  createCategoryValidator,
  validateRequest,
  createCategory
);
router.put(
  "/categories/:id",
  updateCategoryValidator,
  validateRequest,
  updateCategory
);
router.delete("/categories/:id", deleteCategory);

module.exports = router;
