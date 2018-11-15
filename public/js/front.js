$(document).ready(function () {

// Click handler for scrape appending
$("#scrape-button").on("click", function() {
    console.log("I was clicked")
    // Hide empty message
    $("#ohNo").hide();
    // Grab articles from database & append 
    $.getJSON("/articles", function(data) {
        data.forEach((article) => {
            console.log(article.link)
            $("#resultsGuy").append("<a href='" + article.link + "'><h3>" +
            article.headline + "</h3></a>\n<p>" + article.summary + "</p>")
        });
    });
});




});