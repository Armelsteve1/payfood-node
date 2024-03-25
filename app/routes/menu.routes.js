const authJwt = require("../middlewares/authJwt");
const { createMenu, getMenuById, updateMenu, deleteMenu } = require("../controllers/menu.conrtroller");

module.exports = function(app) {
app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
    });
  app.post("/api/menu", [authJwt.verifyToken, authJwt.isRestaurateur], createMenu);
  app.get("/api/menu/:id", [authJwt.verifyToken, authJwt.isRestaurateur], getMenuById);
  app.put("/api/menu/:id", [authJwt.verifyToken, authJwt.isRestaurateur], updateMenu);
  app.delete("/api/menu/:id", [authJwt.verifyToken, authJwt.isRestaurateur], deleteMenu);
};
