const mongoose = require("mongoose");

const Menu = mongoose.model(
  "Menu",
  new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant"
    },
  })
);

module.exports = Menu