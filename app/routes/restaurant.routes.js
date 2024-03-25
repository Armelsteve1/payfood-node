const authJwt = require("../middlewares/authJwt");
const { createRestaurant, getRestaurantById, updateRestaurant, deleteRestaurant, getAllRestaurants } = require("../controllers/restaurant.controller");

module.exports = function(app) {
    app.post("/api/restaurant", [authJwt.verifyToken, authJwt.isRestaurateur], createRestaurant);
    app.get("/api/restaurant/:id", [authJwt.verifyToken, authJwt.isRestaurateur], getRestaurantById);
    app.put("/api/restaurant/:id", [authJwt.verifyToken, authJwt.isRestaurateur], updateRestaurant);
    app.delete("/api/restaurant/:id", [authJwt.verifyToken, authJwt.isRestaurateur], deleteRestaurant);
    app.get("/api/restaurants", [authJwt.verifyToken, authJwt.isRestaurateur], getAllRestaurants);
};
