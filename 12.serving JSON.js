var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  //creating server
  console.log("request was made: " + req.url); //url propert of the request object
  res.writeHead(200, { "content-type": "application/json" }); //1st param in response heaader is the status,2nd param is the content type,here it is JSON

  var myObj = {
    name: "Ryan",
    job: "Samurai",
    age: 25
  };

  res.end(JSON.stringify(myObj)); //json is converted to a string as the end object expects either a string or a buffer
});

server.listen(3000, "127.0.0.1");
console.log("yaw!, you are listening to port 3000");
