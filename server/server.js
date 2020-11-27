const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Initiliaze express app
const app = express();

//Configuring the Environment Variables
dotenv.config({ path: "./config/config.env" });

//Db connection
connectDB();

// express
app.use("/uploads", express.static("uploads"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Defining my routes
app.use("/api/graduates", require("./api/graduatesPage/graduatesRoute"));
app.use("/api", require("./api/userPage/userPageRoute"));

//Configure the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}...`));
