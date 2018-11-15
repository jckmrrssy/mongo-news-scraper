// Dependencies
const router = require("express").Router();
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");

// Bring in all models
const db = require("../models");

// Routes 

// Home page 
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

// Scrape route - will scrape ETHNews trending articles
router.get("/scrape", function (req, res) {
    // request eth news html via axios
    axios.get("https://www.ethnews.com/").then((response) => {
        // Load eth news html into cheerio
        let $ = cheerio.load(response.data);
        // Grab all article thumbnails 
        $("div.article-thumbnail__info").each(function(i, element) {
            // Creat result object & use scrape results to insert declare properties
            let result = {};

            result.headline = $(this)
            .children("a").text();
            result.summary = $(this)
            .children("div.article-thumbnail__info__summary").text();
            result.link = $(this)
            .children("a").attr("href"); 
            
            // Create new Article (for each) to store using result object from above
            db.Article.create(result)
            .then(function(createdArticles) {
                console.log(createdArticles);
            })
            .catch(function(err) {
                console.log(err);d
            });
        });
        res.send("Complete")
    });
});
// Will get all stocks (news snippets/articles) from the database
router.get("/stocks", (req,res) => {

});
// Route for grabbing specific stock by id to & doing stuff with associated comments
router.route("/stocks/:id")    
        .get( (req,res) => {})
        .post( (req,res) => {})
        // delete?


// Export router
module.exports = router;