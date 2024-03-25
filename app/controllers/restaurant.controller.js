const Restaurant = require("../models/restaurant.model");

// Créer un nouveau restaurant
exports.createRestaurant = (req, res) => {
  if (!req.body.name || !req.body.address || !req.body.description) {
    return res.status(400).send({ message: "Tous les champs doivent être remplis !" });
  }

  // Créer un nouveau restaurant
  const restaurant = new Restaurant({
    name: req.body.name,
    address: req.body.address,
    description: req.body.description,
  });

  // Enregistrer le restaurant dans la base de données
  restaurant.save((err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.send(data);
    }
  });
};
// Obtenir tous les restaurants
exports.getAllRestaurants = (req, res) => {
    Restaurant.find({}, (err, data) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.send(data);
      }
    });
  };

// Obtenir un restaurant par son ID
exports.getRestaurantById = (req, res) => {
  Restaurant.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.send(data);
    }
  });
};

// Mettre à jour un restaurant
exports.updateRestaurant = (req, res) => {
  if (!req.body.name || !req.body.address || !req.body.description) {
    return res.status(400).send({ message: "Tous les champs doivent être remplis !" });
  }

  Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.send(data);
    }
  });
};

exports.deleteRestaurant = (req, res) => {
  Restaurant.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.send({ message: "Le restaurant a été supprimé avec succès !" });
    }
  });
};
