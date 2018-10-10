const express = require("express");
const app = express();
const methodOverride = require("method-override");
const carsController = require("./controllers/cars");
const bodyParser = require("body-parser");
const port = 3000;



// Middle Ware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use("/cars", carsController)







// Listening Port Function
app.listen(port, function() {
    console.log("App is running on port: ", port);
  });

