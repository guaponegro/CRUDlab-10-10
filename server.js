const express = require("express");
const app = express();
const methodOverride = require("method-override");
const carsController = require("./controllers/cars")
const port = 3000;

const Cars = require("./models/cars");

// middle ware
app.use(methodOverride("_method"));
app.use("/cars", carsController)








app.listen(port, function() {
    console.log("App is running on port: ", port);
  });

