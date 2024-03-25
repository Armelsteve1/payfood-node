const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.restaurant = require("./restaurant.model");
db.menu = require("./menu.model");

db.ROLES = ["allAccess", "restaurateur", "user"];

module.exports = db;
