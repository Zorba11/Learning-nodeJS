var express = require("express");

var app = express(); // setting up express app

app.get("/", function(req, res) {
  res.send("this is the homepage"); //with express, we don't have to mention the content-type
});

app.get("/contact", function(req, res) {
  res.send("this is the contact page"); //with express, we don't have to mention the content-type
});

app.get("/profile/:id", function(req, res) {
  res.send(
    "You requested to see a peofile with the name of " + req.params.name
  );
});

app.listen(3000); //express app is now listening to port 3000
