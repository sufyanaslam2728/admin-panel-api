const express = require("express");
const router = express.Router();
const { updateInventoryValidator } = require("../validators/inventory");
const {
  getInventory,
  getLowStock,
  createInventory,
  updateInventory,
  getInventoryLogs,
} = require("../controllers/inventory");
const validateRequest = require("../middlewares/validateRequest");

router.get("/inventories", getInventory);
router.get("/inventories/lowStock", getLowStock);
router.post("/inventories", createInventory);
router.put(
  "/inventories/:productId",
  updateInventoryValidator,
  validateRequest,
  updateInventory
);
router.get("/inventories/logs/:productId", getInventoryLogs);

module.exports = router;
