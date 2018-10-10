const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser")
const Cars = require("../models/cars");

// Index Route
router.get("/", (req, res) => {
    res.render("index.ejs", {cars: Cars});
});

// Delete Route
router.delete('/:id', (req, res) => {
    Cars.splice(req.params.id, 1);
    res.redirect('/cars');
  });

// Edit Route
router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        cars: Cars[req.params.id],
        id: req.params.id
    });
});

// Route to Put Edited Info Back Onto Browser
router.put("/:id", (req, res) => {
    Cars[req.params.id] = req.body;
    res.redirect("/cars")
});

// Show Route
router.get("/:id", (req, res) => {
    res.render("show.ejs", {
        cars:Cars[req.params.id],
        id: req.params.id
    });
});

module.exports = router;