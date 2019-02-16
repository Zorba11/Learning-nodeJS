var events = require("events"); //event module of nodejs
var util = require("util"); //utility module of node js

//....example1 event emmitter...
// var myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", function(msg) {
//   console.log(msg);
// });

// myEmitter.emit("someEvent", "the event was emmitted");

//...example2 util...
var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("james");
var mary = new Person("mary");
var ryan = new Person("ryan");

var people = [james, mary, ryan];

people.forEach(function(person) {
  person.on("speak", function(msg) {
    console.log(person.name + " said: " + msg);
  });
});

james.emit("speak", "hey dudes");
ryan.emit("speak", "I want curry");
