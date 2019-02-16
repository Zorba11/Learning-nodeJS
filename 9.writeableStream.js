var http = require("http");

var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8"); //you should define the character encoding else the the data on the console would be shown as buffer bytes
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

myReadStream.on("data", function(chunk) {
  console.log("new chunk recieved: ");

  myWriteStream.write(chunk);
});
