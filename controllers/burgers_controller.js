const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// GET ALL BURGERS ROUTE -- html route
router.get("/", function(req, res) {
    burger.selectAll(data => {
        let burgers = { burgerInst: data};
        res.render("index", burgers);
    });
});

// API ROUTES //

// GET STARS
router.get("/api/burgers", function(req, res) {
    burger.selectAll(data => {
        res.json(data);
    });
});

// INSERT ROUTE
router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name, result => {
        res.json({ id: result.insertId });
    });
});

// UPDATE DEVOURED
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

// UPDATE STARS RATING
router.put("/api/burgers/rating/:id", function(req, res) {
    let burgerID = req.params.id;

    burger.updateRating(req.body.rating, burgerID, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// DELETE ROUTE
router.delete("/api/burgers/:id", function (req, res) {
    let burgerID = req.params.id;

    burger.deleteOne(burgerID, result => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});



module.exports = router;