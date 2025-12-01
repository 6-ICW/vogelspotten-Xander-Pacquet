const express = require("express");
const ctrlspotten = require("../controller/vogels")

// maak router object aan
const routes = express.Router();

// maak de verschillende routs aan

routes.get("/", ctrlspotten.getVogels);
routes.get("/:ID", ctrlspotten.getOneVogel);
routes.put("/", ctrlspotten.AddVogel); // {soort}
routes.get("/:ID", ctrlspotten.vogelGespot); // {ID}

// exporteer het router object
module.exports = routes;
