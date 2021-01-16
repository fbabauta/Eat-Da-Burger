const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// get all burgers route -- html route
router.get("/", function (req, res) {
    burger.selectAll(data => {
        let burgers = { burgerInst: data };
        res.render("index", burgers);
    });
});

// API Routes

// Get Stars
router.get("/api/burgers", function (req, res) {
    burger.selectAll(data => {
        res.json(data);
    });
});

// Insert Route
router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, result => {
        res.json({ id: result.insertId });
    });
});

// Update Devoured
router.put("/api/burgers/:id", function (req, res) {
    let burgerID = req.params.id;

    burger.updateDevoured(req.body.devoured, burgerID, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
    
// Update Stars Rating
router.put("/api/burgers/rating/:id", function (req, res) {
    let burgerID = req.params.id;

    burger.updateRating(req.body.rating, burgerID, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Delete route
router.delete("/api/burgers/:id", function (req, res) {
    let burgerID = req.params.id;

    burger.deleteOne(burgerID, result => {
        if (result.affectRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});


module.exports = router;