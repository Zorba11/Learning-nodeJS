var http = require("http");

//the request and response comes with its data and also with its own headers

var server = http.createServer(function(req, res) {
  console.log("request was made: " + req.url); //url propert of the request object
  res.writeHead(200, { "content-type": "text/plain" }); //1st param in response heaader is the status
  res.end("Hey warriors"); //end object always expect a string or a buffer
});

server.listen(3000, "127.0.0.1"); //defines the port number to which the server is listening to, the 2nd param is the ip address, here it is the local host
console.log("yaw!, you are listening to port 3000");
