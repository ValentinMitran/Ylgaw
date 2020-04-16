const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

//Import Routes
const authRoute = require("./routes/auth");

//Middleware
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);

app.listen(3005, () => console.log("Express running"));