const mongoose = require("mongoose");

let Schema = mongoose.Schema;

// Creating the Article Schema object
let ArticleSchema = new Schema ({
    
    headline: {},
    summary: {},
    link: {},
    // thumbnail?
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});
// Create the model above using mongoose's model method 
let Article = mongoose.model("Article", ArticleSchema);

// Export Article model
module.exports = Article;