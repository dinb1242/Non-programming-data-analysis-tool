const express = require("express");
const router = express.Router();
const dfd = require("danfojs-node");

dfd.read_csv("https://raw.githubusercontent.com/dinb1242/datasets/master/weather-in-jeju.csv");

// Routes index page
router.get("/", (req, res) => {
    res.render("index", {title: "Router Test"});
})

module.exports = router;