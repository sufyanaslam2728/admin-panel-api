const express = require("express");
const cors = require("cors");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const inventoryRoutes = require("./routes/inventory");
const salesRoutes = require("./routes/sales");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", inventoryRoutes);
app.use("/api", salesRoutes);

module.exports = app;
