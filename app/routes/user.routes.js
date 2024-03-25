const authJwt = require("../middlewares/authJwt");
const { allAccess, user, restaurateur } = require("../controllers/users.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], user);

  app.get(
    "/api/test/restaurateur",
    [authJwt.verifyToken, authJwt.isRestaurateur],
    restaurateur
  );
};
