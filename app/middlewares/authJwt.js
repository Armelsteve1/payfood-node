const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

// Middleware pour vérifier le token JWT
const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "Aucun token fourni !" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Non autorisé !" });
    }
    req.userId = decoded.id;
    next();
  });
};

// Middleware pour vérifier si l'utilisateur est un restaurateur
const isRestaurateur = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find({ _id: { $in: user.roles } }, (err, roles) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "restaurateur") {
          next();
          return;
        }
      }

      res.status(403).send({ message: "Nécessite le rôle de restaurateur !" });
    });
  });
};

// Middleware pour vérifier si l'utilisateur est un user
const isUser = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find({ _id: { $in: user.roles } }, (err, roles) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "") {
          next();
          return;
        }
      }

      res.status(403).send({ message: "Nécessite le rôle de User !" });
    });
  });
};

// Objets contenant les middlewares pour l'authentification et les rôles
const authJwt = {
  verifyToken,
  isRestaurateur,
  isUser
};

module.exports = authJwt;
