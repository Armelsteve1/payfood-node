const mongoose = require("mongoose");

const Restaurant = mongoose.model(
  "Restaurant",
  new mongoose.Schema({
    name: String,
    address: String,
    description: String,
  })
);

module.exports = Restaurant;