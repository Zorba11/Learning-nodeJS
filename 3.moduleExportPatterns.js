var stuff = require("./stuff"); //definess the location from where the module is acquired from

console.log(stuff.counter(["Alen", "George", "theForce"]));
console.log(stuff.adder(5, 7));
console.log(stuff.adder(stuff.pi, 5));
