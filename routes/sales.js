const express = require("express");
const router = express.Router();
const { createSaleValidator } = require("../validators/sale");
const validateRequest = require("../middlewares/validateRequest");
const {
  getSales,
  createSale,
  updateSale,
  getRevenue,
  compareRevenue,
} = require("../controllers/sales");

router.get("/sales", getSales);
router.post("/sales", createSaleValidator, validateRequest, createSale);
router.put("/sales/:id", updateSale);

router.get("/sales/revenue", getRevenue);
router.post("/sales/revenue/compare", compareRevenue);

module.exports = router;
