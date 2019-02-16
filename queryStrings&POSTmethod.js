var express = require("express");
var bodyParser = require("body-parser"); //body parser from node is the middleware to handle POST request

var app = express(); // setting up express app

var urlencodedParser = bodyParser.urlencoded({ extended: false }); //this is the middleware for POST

app.set("view engine", "ejs"); //tells express that we need ejs as the view engine
// app.use("/assets", function(req, res, next) {
//   //setting up the middleware, ...middleware is the program that runs between requests and response
//   console.log(req.url);
//   next();
// });

app.use("/assets", express.static("stuff")); //inbuilt middleware of express

app.get("/", function(req, res) {
  res.render("index"); //render is used to send ejs files
});

app.get("/contact", function(req, res) {
  //   console.log(req.query);
  res.render("contact", { qs: req.query }); //with express, we don't have to mention the content-type
});

// a body-parser from npm is the middleware used to handle POST requests more efficiently...

app.post("/contact", urlencodedParser, function(req, res) {
  //   console.log(req.body);
  res.render("contact-success", { data: req.body });
});

app.get("/profile/:name", function(req, res) {
  var data = {
    age: 29,
    job: "ninja",
    hobbies: ["eating", "fishing", "fighting"]
  };
  res.render("profile", { person: req.params.name, data: data }); //render is used to send the ejs file
});

app.listen(3000); //express app is now listening to port 3000
