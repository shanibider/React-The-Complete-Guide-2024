import { apiKey } from "./util.js";
import apiKey from "./util.js";
import { apiKey, abc as content } from "./util.js";
import * as util from "./util.js";

console.log(util.apiKey);
console.log(content);

const userMessage = "Hello World!!!";

console.log(userMessage);
console.log(userMessage);

function createGreeting(userName, message = "Hello!") {
console.log(userName);
console.log(message);
  return "Hi, I am " + userName + ". " + message;
}

const greeting1 = createGreeting("Max");
console.log(greeting1);

const greeting2 = createGreeting("Manuel", "Hello, what's up?");
console.log(greeting2);

// Arrow Function: 
export default (userName, message) => {
 console.log("Hello");
  return userName + message;
};
/* equal to:
export default1 (userName, message) => {
    return userName + message;
};
*/


// More on the Arrow Function Syntax:
// 1) If takes exactly one parameter, you may omit the wrapping parentheses.
default userName => {
    return userName + message;
  }  
  // 2) If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.
  number => number * 3;
  // equal to:
  number => { 
    return number * 3;
  }  
  // 3) Special case: Just returning an object
  // If you go for the shorter alternative explained in 2) and you're trying to return a JavaScript object,
  // you may end up with the following, invalid code: number => { age: number }; // trying to return an object
  // This code would be invalid because JavaScript treats the curly braces as function body wrappers
  // (not as code that creates a JS object).
  // To "tell" JavaScript that an object should be created (and returned) instead,
  // the code would need to be adjusted like this:
  number => ({ age: number }); // wrapping the object in extra parentheses

  
  
// Objects:
const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello!");
    console.log(this.age);
  }
};

console.log(user.name);
user.greet();


  

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi!");
  }
}

const user1 = new User("Manuel", 35);
console.log(user1);
user1.greet();



// Arrays:
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === "Sports");

console.log(index); //0

const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);



// Destructing
// To destruct an array we add '[]' 
const [firstName, lastName] = ["Max", "Schwarzmüller"];

const firstName = userNameData[0];
const lastName = userNameData[1];
console.log(firstName);
console.log(lastName);


// To destruct an object we add '{}'. Must use the same property name.
// Could also use alias
const { name: userName, age } = {
  name: "Max",
  age: 34
};
console.log(userName);
console.log(age);

const name = user.name;
const age = user.age;

const hobbies = ["Sports", "Cooking"];
const user = {
  name: "Max",
  age: 34
};


// The Spread Operator `...`
const newHobbies = ["Reading"];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const extendedUser = {
  isAdmin: true,
  ...user
};
console.log(extendedUser);
/*
will log:
isAdmin: true
name: "Shani"
hobby: "fitness"
*/



const password = prompt("Your password");

if (password === "Hello") {
  console.log("Hello works");
} else if (password === "hello") {
  console.log("hello works");
} else {
  console.log("Access not granted.");
}


const hobbies = ["Sports", "Cooking"];
for (const hobby of hobbies) {
  console.log(hobby);
}



const list = document.querySelector("ul");
list.remove();



// Functions as values
function handleTimeout() {
  console.log("Timed out!");
}

const handleTimeout2 = () => {
  console.log("Timed out ... again!");
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log("More timing out...");
}, 4000);






// Functions inside of functions
function init() {
  function greet() {
    console.log(“Hi!“);
  }

  greet();
}

init();



// reference vs premative values
const message = “Hello”;

const hobbies = ["Sports", "Cooking"];
hobbies = [];
hobbies.push("Working");
console.log(hobbies);



// let
// The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
let x = 1;

if (x === 1) {
  let x = 2;
  console.log(x);  // Expected output: 2
}
console.log(x);// Expected output: 1



// const
// The const declaration declares block-scoped local variables.
// The value of a constant can't be changed through reassignment using the assignment operator,
// but if a constant is an object, its properties can be added, updated, or removed.
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'number'
  // (Note: the exact output may be browser-dependent)
}
console.log(number);// Expected output: 42


// ES6 Arrow Functions
// Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this  keyword (see here).
// Arrow function syntax may look strange but it's actually simple.

function callMe(name) { 
    console.log(name);
}

// which you could also write as:
const callMe = function(name) { 
    console.log(name);
}

// becomes: 
const callMe = (name) => { 
    console.log(name);
}


// Important: 
// When having no arguments, you have to use empty parentheses in the function declaration:
const callMe = () => { 
  console.log('Max!');
}

// When having exactly one argument, you may omit the parentheses:
const callMe = name => { 
  console.log(name);
}

// When just returning a value, you can use the following shortcut:
const returnMe = name => name

// That's equal to:
const returnMe = name => { 
  return name;
}








// Exports & Imports
// In React projects (and actually in all modern JavaScript projects),
// you split your code across multiple JavaScript files - so-called modules.
// You do this, to keep each file/ module focused and manageable.
// To still access functionality in another file, you need export  (to make it available) and import  (to get access) statements.

// You got two different types of exports: default (unnamed) and named exports:

default => export default ...; 

named => export const someData = ...; 

// You can import default exports like this:
import someNameOfYourChoice from './path/to/file.js'; 

// Surprisingly, someNameOfYourChoice  is totally up to you.

// Named exports have to be imported by their name:
import { someData } from './path/to/file.js'; 

// A file can only contain one default and an unlimited amount of named exports.
// You can also mix the one default with any amount of named exports in one and the same file.
// When importing named exports, you can also import all named exports at once with the following syntax:
import * as upToYou from './path/to/file.js'; 

// `upToYou`  is - well - up to you and simply bundles all exported variables/functions in one JavaScript object.
// For example, if you export const someData = ...  (/path/to/file.js ) you can access it on upToYou  like this: upToYou.someData .




// Classes
// Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them. 

// Like this:
class Person {
    constructor () {
        this.name = 'Max';
    }
}
 
const person = new Person();
console.log(person.name); // prints 'Max'

/* In the above example, not only the class but also a property of that class (=> name ) is defined. The syntax you see there, is the "old" syntax for defining properties. In modern JavaScript projects (as the one used in this course), you can use the following, more convenient way of defining class properties: */
class Person {
    name = 'Max';
}
 
const person = new Person();
console.log(person.name); // prints 'Max'

// You can also define methods. Either like this:
class Person {
    name = 'Max';
    printMyName () {
        console.log(this.name); // this is required to refer to the class!
    }
}
 
const person = new Person();
person.printMyName();

// Or like this:
class Person {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();

// The second approach has the same advantage as all arrow functions have: The this  keyword doesn't change its reference.

// You can also use inheritance when using classes:
class Human {
    species = 'human';
}
 
class Person extends Human {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();
console.log(person.species); // prints 'human'



// Spread & Rest Operator
// The spread and rest operators actually use the same syntax: `... `
// It's usage determines whether you're using it as the spread or rest operator.

// Using the Spread Operator:
// The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];

// Here's the spread operator used on an object:
const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};

// newObject  would then be
{
    name: 'Max',
    age: 28
}

/* The spread operator is extremely useful for cloning arrays and objects. Since both are reference types (and not primitives), copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array.*/



// Destructuring
// Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

// Here's an example for an array:

const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]

// And here for an object:
const myObj = {
    name: 'Max',
    age: 28
}
const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}


// Destructuring is very useful when working with function arguments. Consider this example:
const printName = (personObj) => {
    console.log(personObj.name);
}
printName({name: 'Max', age: 28}); // prints 'Max'


// Here, we only want to print the name in the function but we pass a complete person object to the function.
// Of course this is no issue but it forces us to call personObj.name inside of our function.
// We can condense this code with destructuring:
const printName = ({name}) => {
    console.log(name);
}
printName({name: 'Max', age: 28}); // prints 'Max')

// We get the same result as above but we save some code.
// By destructuring, we simply pull out the name  property and store it in a variable/ argument named name  which we then can use in the function body.