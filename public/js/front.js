$(document).ready(function () {

// Click handler for scrape appending
$("#scrape-button").on("click", function() {
    // Hide empty message
    ("#ohNo").hide();
    // Grab articles from database & append 
    $.getJSON("/articles", function(data) {
        data.forEach((article) => {
            $("#resultsGuy").append("<h2><a href='" + article.link + "'>" +
            article.headline + "</a></h2>\n<p>" + article.summary + "</p>")
        });
    });
});




});