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










function init() {
  function greet() {
    console.log(“Hi!“);
  }

  greet();
}

init();

const message = “Hello”;

const hobbies = ["Sports", "Cooking"];
hobbies = [];
hobbies.push("Working");
console.log(hobbies);
