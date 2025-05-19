module.exports = (sequelize, DataTypes) => {
  const InventoryLog = sequelize.define(
    "InventoryLog",
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      change: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reason: {
        type: DataTypes.ENUM("sale", "restock", "update"),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      updatedAt: false,
    }
  );

  InventoryLog.associate = (models) => {
    InventoryLog.belongsTo(models.Product, {
      foreignKey: "productId",
      as: "product",
    });
  };

  return InventoryLog;
};
