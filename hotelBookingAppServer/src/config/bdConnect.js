const mongoose = require("mongoose");
const config = require("./config.js");

// mongobd connection
const dbConnect = async () => {
  try {
    await mongoose.connect(config.db.url);
    console.log("database is connected");
  } catch (error) {
    console.log("database is not connected " + error.message);
  }
};

module.exports = dbConnect;
