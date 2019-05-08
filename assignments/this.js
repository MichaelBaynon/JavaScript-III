/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. when in global scope the value of 'this' will be = console object 
* 2. whenever a preceding dot is used the object before said dot is 'this'
* 3. a constuctor function returns an object basically it creates an object  
* 4. by using .call or .apply we are explictily defining 'this'
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayHeight(height) {
    console.log(this);
    return height;
}
sayHeight('Five Foot Eleven')

// Principle 2

// code example for Implicit Binding

const myJob = {
    greeting: 'Hello',
    job: 'Developer',
    sayJob: function(name) {
      console.log(`${this.greeting} my name is ${name} and I am a ${this.job}`);
      console.log(this);
    }
  };
  myJob.sayJob('Michael');

// Principle 3

// code example for New Binding

function FullStackDeveloper(field) {
    this.school = 'Lamda School ';
    this.field = 'FullStackDev';
    this.speak = function() {
      console.log(this.school + this.field);
      console.log(this);
    };
  }
  
  const jake = new FullStackDeveloper('Jake');
  const chris = new FullStackDeveloper('Chris');
  
  jake.speak();
  chris.speak();

// Principle 4

// code example for Explicit Binding

jake.speak.call(chris); chris.speak.apply(jake);