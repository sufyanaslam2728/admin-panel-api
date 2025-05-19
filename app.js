const express = require("express");
const cors = require("cors");
const categoryRoutes = require("./routes/category");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", categoryRoutes);

module.exports = app;
