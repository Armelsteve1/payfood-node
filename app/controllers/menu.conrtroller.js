const Menu = require("../models/menu.model");

// Créer un nouveau menu
exports.createMenu = (req, res) => {
  // Vérifier si toutes les données requises sont fournies
  if (!req.body.name || !req.body.description || !req.body.price || !req.body.restaurantId) {
    return res.status(400).send({ message: "Tous les champs doivent être remplis !" });
  }

  // Créer un nouveau menu
  const menu = new Menu({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    restaurant: req.body.restaurantId,
    // Ajoutez d'autres champs si nécessaire
  });
  menu.save((err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.send(data);
    }
  });
};

// Obtenir un menu par son ID
exports.getMenuById = (req, res) => {
  Menu.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.send(data);
    }
  });
};

// Mettre à jour un menu
exports.updateMenu = (req, res) => {
  if (!req.body.name || !req.body.description || !req.body.price) {
    return res.status(400).send({ message: "Tous les champs doivent être remplis !" });
  }

  Menu.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.send(data);
    }
  });
};

// Supprimer un menu
exports.deleteMenu = (req, res) => {
  Menu.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.send({ message: "Le menu a été supprimé avec succès !" });
    }
  });
};
