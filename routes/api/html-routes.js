var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var logger = require("morgan");
var request = require("request");
var axios = require("axios");
var app = express();

var databaseUrl = "newsdb";
var collections = ["articles"];
var db = mongojs(databaseUrl, collections);

module.exports = function (app) {

db.on("error", function(error) {
    console.log("Database Error:", error);
});

app.get("/articles", function(req, res) {
    db.Article
      .find({})
      .then(function(dbArticle) {
        res.render("index", dbArticle);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

// Route for grabbing a specific Article by id, populate it with it's note
app.get("/articles/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Article
      .findOne({ _id: req.params.id })
      // ..and populate all of the notes associated with it
      .populate("Post")
      .then(function(dbArticle) {
        // If we were able to successfully find an Article with the given id, send it back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  // Route for saving/updating an Article's associated Note
app.post("/articles/:id", function(req, res) {
    // Create a new note and pass the req.body to the entry
    db.Post
      .create(req.body)
      .then(function(dbPost) {
        // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
        // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
        // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { Post: dbPost._id }, { new: true });
      })
      .then(function(dbArticle) {
        // If we were able to successfully update an Article, send it back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });


    app.get("/create_user", function (req, res) {
        db.users.find({}, function(err, data) {
            if (err) {
                console.log(error);
            } else {
            res.render("create_user", {usersPrevious: data});
            }
            console.log(data);
        });
    });

        //Render login-page at register
    app.get("/submit", function (req, res) {
        window.location.href = "/";
    });


    //Get all articles from database
    app.get("/", function(req, res) {

        db.articles.find({}, function(err, data) {
            if (err) {
                console.log(error);
            } else {
              res.render("index", {article: data});
         
            }
        });
    });

};//Page Export Function Close
