"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("InventoryLogs", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Products", key: "id" },
      },
      change: { type: Sequelize.INTEGER, allowNull: false },
      reason: {
        type: Sequelize.ENUM("sale", "restock", "update"),
        allowNull: false,
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("InventoryLogs");
  },
};
