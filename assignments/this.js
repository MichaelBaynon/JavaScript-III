/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global Object Binding - the value of 'this' will be the console Object
 * 2. Implicit binding - Whenever a function is called by a preceding dot the object left of the dot get 'this'
 * 3. New Binding - [constuctor functions] is used 'this' refers to the specific instance of the object that is created and returned by the constructor function
 * 4. Explicit Binding - using .call or .apply you overide the 'this' keyword
 *
 * write out a code example of each explanation above
 */

// Principle 1

function sayEmail(email) {
  console.log(this);
  return email;
}
sayEmail("jamesSmith1234@gmail.com");

// Principle 2

const myNum = {
  greet: "Greetings",
  name: "Sir",
  sayGreet: function(number) {
    console.log(`${this.greet} ${this.name} my number is ${number}`);
  }
};
myNum.sayGreet("901-5919-2895");

// Principle 3

function CrazyPerson(greeter) {
  this.screaming = "HELLO";
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const oscar = new CrazyPerson("Marcus");
const marcus = new CrazyPerson("Oscar");

marcus.speak();
oscar.speak();

// Principle 4

// const oscar = new CrazyPerson('Marcus');
// const marcus = new CrazyPerson('Oscar');

// oscar.speak.call(marcus);
// marcus.speak.apply(oscar);

// marcus.speak();
// oscar.speak();
