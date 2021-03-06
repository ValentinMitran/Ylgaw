const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

//Import Routes
const userRoute = require("./routes/auth");
const walletRoute = require("./routes/wallet");
const timeMachineRoute = require("./routes/timeMachine");

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("DB up n running")
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use("/api/user", userRoute);
app.use("/api/wallet", walletRoute);
app.use("/api/timeMachine", timeMachineRoute);

app.listen(process.env.PORT || 3001, () => console.log("Express running"));