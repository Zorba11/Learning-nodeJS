// //normal function statement

// function sayHi() {
//   console.log("hi");
// }

// sayHi();

//function expression

// var sayBye = function() {
//   console.log("bye");
// };

//another pattern
function callFunction(fun) {
  fun();
}

var sayBye = function() {
  console.log("bye");
};

callFunction(sayBye);
