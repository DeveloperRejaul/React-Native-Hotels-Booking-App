const express = require("express");
const dbConnect = require("./src/config/bdConnect.js");
const userRoute = require("./src/roters/user.route.js");
const hotelRoute = require("./src/roters/hotels.route.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();

// user routes
app.use("/users", userRoute);

// Hotels routes
app.use("/hotels", hotelRoute);

module.exports = app;
