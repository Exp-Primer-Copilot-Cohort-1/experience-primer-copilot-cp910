// Create web server
// Run: node comments.js
// View at http://localhost:8080
// Note: requires express and body-parser node modules
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var comments = [];
app.use(express.static("."));
app.use(bodyParser.json());
app.get("/comments", function(req, res) {
  res.json(comments);
});
app.post("/comments", function(req, res) {
  comments.push(req.body);
  res.json(comments);
});
app.listen(8080);
console.log("Server is running on port 8080");