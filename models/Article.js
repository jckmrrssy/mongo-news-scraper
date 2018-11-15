const mongoose = require("mongoose");

let Schema = mongoose.Schema;

// Creating the Article Schema object
let ArticleSchema = new Schema({

    headline: String,
    
    summary: String,
    
    link: String,
    // thumbnail? just get it working for now then improve 
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});
// Create the model above using mongoose's model method 
let Article = mongoose.model("Articles", ArticleSchema);

// Export Article model
module.exports = Article;