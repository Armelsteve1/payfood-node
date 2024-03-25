const express = require("express");
const cors = require("cors");
const { url } = require("./app/config/db.config");
const { connect } = require("mongoose");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { role } = require("./app/models");
const Role = role;

connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to your application." });
});

const restaurantRoutes = require("./app/routes/restaurant.routes");
const menuRoutes = require("./app/routes/menu.routes");

restaurantRoutes(app);
menuRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount()
    .then(count => {
      if (count === 0) {
        new Role({
          name: "allAccess"
        }).save()
          .then(() => {
            console.log("Added 'user' to roles collection");
          })
          .catch(err => {
            console.error("Error:", err);
          });

        new Role({
          name: "restaurateur"
        }).save()
          .then(() => {
            console.log("Added 'restaurateur' to roles collection");
          })
          .catch(err => {
            console.error("Error:", err);
          });

        new Role({
          name: "user"
        }).save()
          .then(() => {
            console.log("Added 'user' to roles collection");
          })
          .catch(err => {
            console.error("Error:", err);
          });
      }
    })
    .catch(err => {
      console.error("Error:", err);
    });
}
