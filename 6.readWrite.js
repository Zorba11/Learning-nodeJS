var fs = require("fs"); // module for reading and writing files

// var readMe = fs.readFileSync("readMe.txt", "utf8"); //method that reads files, its a syncronous method- which means all
// //other code execution is blocked untill the whole file is read , 2nd parameter is the character encoding

// fs.writeFileSync("writeMe.txt", readMe); //1st parametr is the file to which it should be written an 2nd param is the data to be written

// console.log(readMe);

//....asyncr request ...therefore there should be 3rd param which is function to be executed after the read is complete
//better thing here is that ,other extra code would run while the reading is taking place
//its always better to add a callback function with asynchronous methods
fs.readFile("readMe.txt", "utf8", function(err, data) {
  fs.writeFile("writeMe.txt", data, err => {
    if (err) throw err;
    console.log("it is saved");
  });
  //   console.log(data);
});
