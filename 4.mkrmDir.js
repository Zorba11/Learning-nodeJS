var fs = require("fs");

//...delete files...

// fs.unlink("writeMe.txt", () => console.log("deleted"));

//....synronous making directories...

// fs.mkdirSync("stuff");

//...syncron removing direct...

// fs.rmdirSync("stuff");

//...async making direct

// fs.mkdir('stuff',function(){

//     fs.readFile('readMe.txt','utf8',function(err,data){
// fs.writeFile('./stuff/writeMe.txt',data,()=>{});
//     });
// });

//...async remove dir...for removing directories first its contents should be removed

fs.unlink('./stuff/writeMe.txt',function(){
    fs.rmdir('stuff',()=>{});
});