const bodyParser = require("body-parser");
const express = require("express");
const color = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./src/config/db");
const recipeRoutes = require("./src/routes/recipeRoutes");
const UserRoutes = require("./src/routes/UserRoutes");

connectDB();
const app = express();
app.use(bodyParser.json());
app.use("/recipe", recipeRoutes);
app.use("/User", UserRoutes);
const Port = process.env.PORT;
app.listen(Port, () => console.log(`server running on localhost${Port}`.cyan));
