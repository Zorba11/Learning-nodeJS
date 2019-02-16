var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  //creating server
  console.log("request was made: " + req.url); //url propert of the request object
  res.writeHead(200, { "content-type": "text/html" }); //1st param in response heaader is the status,2nd param is the content type

  var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8"); //creating read stream

  myReadStream.pipe(res); //piping the readstream to the response stream
});

server.listen(3000, "127.0.0.1");
console.log("yaw!, you are listening to port 3000");
