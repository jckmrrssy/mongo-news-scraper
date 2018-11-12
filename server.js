// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");

// Bring in all models
const db = require("./models");

// Determine port to use based on deployed or local
const PORT = process.env.PORT || 3000

// Initialize Express
let app = express();

// Use either deployed or local database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// Connect to Mongo DB
mongoose.connect(MONGODB_URI);

// Here is some middleware

// Morgan logger setup
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// Making public a static folder
app.use(express.static("public"));

// Bring in routes here , may need to move dependencies around and such



// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });


