var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    post: {
          type: Schema.Types.ObjectId,
          ref: "Post"
      }
    });

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
