// Dependencies
const router = require("express").Router();
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");

// Bring in all models
const db = require("../models");

// Routes 

// Home page 
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});


// Export router
module.exports = router;