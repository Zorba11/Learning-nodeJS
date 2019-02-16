//....1st way to export....
// var counter = function(arr) {
//   return "There are " + arr.length + " elements in an array";
// };

// var adder = function(a, b) {
//   return `The sum of the 2 numbers is ${a + b}`;
// };
// var pi = 3.142;

// module.exports.counter= counter; //define which part of the module needs to be available in other modules
// module.exports.adder = adder;
// module.exports.pi = pi;

//....2nd way to export
// module.exports.counter = function(arr) {
//   return "There are " + arr.length + " elements in an array";
// };

// module.exports.adder = function(a, b) {
//   return `The sum of the 2 numbers is ${a + b}`;
// };

// module.exports.pi = 3.142;

//....3rd way to export

var counter = function(arr) {
  return "There are " + arr.length + " elements in an array";
};

var adder = function(a, b) {
  return `The sum of the 2 numbers is ${a + b}`;
};
var pi = 3.142;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
