var express = require("express");

var app = express(); // setting up express app

app.set("view engine", "ejs"); //tells express that we need ejs as the view engine

app.get("/", function(req, res) {
  res.render("index"); //render is used to send ejs files
});

app.get("/contact", function(req, res) {
  res.render("contact"); //with express, we don't have to mention the content-type
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
