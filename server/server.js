const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const colors = require("colors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(colors.underline.yellow(`Server running on port: ${PORT}`));
});
