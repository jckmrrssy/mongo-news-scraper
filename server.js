// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


// Bring in all models
const db = require("./models");

// Determine port to use based on deployment status
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


// Bring in routes here
let routes = require("./routes/routes.js");

app.use(routes)


// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });


