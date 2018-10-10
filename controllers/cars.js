const express = require("express");
const router = express.Router();
const Cars = require("../models/cars");

// router.get("/cars", (req, res) => {
//     res.send(Cars);
// })

router.get("/", (req, res) => {
    res.render("index.ejs", {cars: Cars});
});

router.delete('/:id', (req, res) => {
    Cars.splice(req.params.id, 1);
    res.redirect('/cars');
  });



module.exports = router;