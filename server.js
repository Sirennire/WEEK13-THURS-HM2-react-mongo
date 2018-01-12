const express = require("express");
const path = require("path");
const mongojs = require("mongojs")
const bodyParser = require("body-parser");
const cheerio = require("cheerio");
const logger = require("morgan");
const request = require("request");
const axios = require("axios");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

var db = require("./models");

app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/newsdb",
    {
      useMongoClient: true
    }
  );



require("./routes/api-routes.js")(app);
//require("./routes/html-routes.js")(app);

var databaseUrl = "newsdb";
var collections = ["articles"];

var db = mongojs(databaseUrl, collections);

db.on("error", function(error) {
  console.log("Database Error:", error);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
