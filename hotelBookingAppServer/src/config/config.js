require("dotenv").config();
const config = {
  app: {
    port: process.env.PORT || 5000,
    // process.env.PORT ||
  },
  db: {
    url: process.env.DBURL || "mongodb://127.0.0.1:27017/hotelApp",
    // process.env.DBURL ||
  },
};

module.exports = config;
