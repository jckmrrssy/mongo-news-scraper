$(document).ready(function () {

// Click handler for scrape appending
$("#scrape-button").on("click", function() {
    console.log("I was clicked")
    // Hide empty message
    $("#ohNo").hide();
    // Grab articles from database & append 
    $.getJSON("/articles", function(data) {
        data.forEach((article) => {
            $("#resultsGuy").append("<a href='" + article.link + "'><h2>" +
            article.headline + "</h2></a>\n<p>" + article.summary + "</p>")
        });
    });
});




});