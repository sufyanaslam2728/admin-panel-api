const { Inventory, InventoryLog, Product } = require("../models");
const { Op } = require("sequelize");

exports.getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findAll({
      include: [
        {
          model: Product,
          as: "product",
        },
      ],
    });
    res.json(inventory);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getLowStock = async (req, res) => {
  try {
    const inventory = await Inventory.findAll({
      where: { stock: { [Op.lt]: 10 } },
      include: [
        {
          model: Product,
          as: "product",
        },
      ],
    });
    res.json(inventory);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createInventory = async (req, res) => {
  try {
    const { productId, stock } = req.body;
    const inv = await Inventory.create({ productId, stock });
    await InventoryLog.create({
      productId,
      change: stock,
      reason: "restock",
    });
    res.status(201).json(inv);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateInventory = async (req, res) => {
  try {
    const { newStock, reason } = req.body;
    const { productId } = req.params;

    const inventory = await Inventory.findOne({ where: { productId } });
    if (!inventory)
      return res.status(404).json({ error: "Inventory not found" });
    let change;
    if (reason === "restock") {
      change = newStock + inventory.stock;
    } else if (reason === "sale") {
      change = inventory.stock - newStock;
    } else {
      change = newStock;
    }

    inventory.stock = change;
    await inventory.save();

    await InventoryLog.create({ productId, change, reason });

    res.json(inventory);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getInventoryLogs = async (req, res) => {
  try {
    const logs = await InventoryLog.findAll({
      where: { productId: req.params.productId },
      order: [["createdAt", "DESC"]],
    });
    res.json(logs);
  } catch (err) {
    res.status(400).json(err);
  }
};
