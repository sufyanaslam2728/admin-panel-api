"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();

    // 1. Insert Categories
    const categories = [
      { name: "Electronics", createdAt: now, updatedAt: now },
      { name: "Clothing", createdAt: now, updatedAt: now },
      { name: "Home Appliances", createdAt: now, updatedAt: now },
    ];
    await queryInterface.bulkInsert("Categories", categories);

    // 2. Insert Products
    const products = [
      {
        name: "iPhone 14",
        description: "Latest Apple smartphone",
        price: 999.99,
        categoryId: 1, // Electronics
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Men T-Shirt",
        description: "Cotton casual wear",
        price: 19.99,
        categoryId: 2, // Clothing
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Microwave Oven",
        description: "1000W Digital Microwave",
        price: 150.0,
        categoryId: 3, // Home Appliances
        createdAt: now,
        updatedAt: now,
      },
    ];
    await queryInterface.bulkInsert("Products", products);

    // 3. Insert Inventories
    const inventories = [
      {
        productId: 1,
        stock: 100,
        lastUpdated: now,
        createdAt: now,
        updatedAt: now,
      },
      {
        productId: 2,
        stock: 200,
        lastUpdated: now,
        createdAt: now,
        updatedAt: now,
      },
      {
        productId: 3,
        stock: 50,
        lastUpdated: now,
        createdAt: now,
        updatedAt: now,
      },
    ];
    await queryInterface.bulkInsert("Inventories", inventories);

    // 4. Insert Sales
    const sales = [
      {
        productId: 1,
        quantity: 2,
        totalPrice: 1999.98,
        saleDate: new Date("2025-05-15"),
        createdAt: now,
        updatedAt: now,
      },
      {
        productId: 2,
        quantity: 5,
        totalPrice: 99.95,
        saleDate: new Date("2025-05-14"),
        createdAt: now,
        updatedAt: now,
      },
    ];
    await queryInterface.bulkInsert("Sales", sales);

    // 5. Insert Inventory Logs
    const logs = [
      { productId: 1, change: -2, reason: "sale", createdAt: now },
      { productId: 2, change: -5, reason: "sale", createdAt: now },
      { productId: 3, change: 50, reason: "restock", createdAt: now },
    ];
    await queryInterface.bulkInsert("InventoryLogs", logs);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("InventoryLogs", null, {});
    await queryInterface.bulkDelete("Sales", null, {});
    await queryInterface.bulkDelete("Inventories", null, {});
    await queryInterface.bulkDelete("Products", null, {});
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
