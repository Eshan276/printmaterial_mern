const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const materialsRoutes = require("./routes/materials");
const path = require("path");

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/materials", materialsRoutes);
//console.log("materialsRoutes", materialsRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
