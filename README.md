# React - The Complete Guide 2024 (incl. React Router & Redux) 🚀
Welcome to my Git repository for **React - The Complete Guide!** <img height=20px src="https://skillicons.dev/icons?i=react"> This 68 hours Udemy course has equipped me with comprehensive knowledge and practical experience in React development. 🧾

<div align=center>
  <img height="350px" src="https://github.com/shanibider/React---The-Complete-Guide-2024/assets/72359805/3d5c195b-4177-4da2-ae13-5234de5ed3cd">
</div> <br>

# 🏆 Course Overview -



## ◻ Section 2: JavaScript Refresher:
### ◻ Codesandbox Coding Exercise:
#### [👉🏻 First React App](https://codesandbox.io/p/sandbox/first-react-app-zj5cx1?file=%2Fsrc%2FApp.js)

![2](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/61e6dca9-117e-4f99-8772-48739fde954f)

```javascript
import { useState } from "react";
import "./styles.css";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there"
  ]
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            React vs JS
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
```

```css
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-color: #181c1f;
  color: #bdd1d4;
  margin: 2rem;
}

header {
  margin: 2rem 0;
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

header img {
  width: 3rem;
  object-fit: contain;
}

header h1 {
  margin: 0;
  color: #48d9f3;
}

header p {
  margin: 0;
  color: #82c2ce;
}

#tabs {
  max-width: 32rem;
  margin: 2rem 0;
  overflow: hidden;
}

#tabs menu {
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.25rem;
}

#tabs button {
  font: inherit;
  font-size: 0.85rem;
  background-color: #282f33;
  border: none;
  border-bottom-color: #48d9f3;
  color: #e0eff1;
  border-radius: 4px 4px 0 0;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

#tabs button:hover,
#tabs button.active {
  background-color: #48d9f3;
  color: #273133;
}

#tab-content {
  background-color: #2d3942;
  border-radius: 0 4px 4px 4px;
  padding: 1rem;
}

#tab-content li {
  margin: 0.75rem 0;
}
```



### ◻ Arrow Function: 
```javascript
default function (){
  console.log('hello');
}
// equal to:
default (userName, message) => {
  return userName + message;
}

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
```

### ◻ objects:
```javascript
const user = {
name: "Shani",
hobby: "fitness",
greet(){
  console.log ("Hello");
  console.log (this.hobby);
}
};
console.log (user.name);
user.greet();



Class User{
  constructor(name,age){
    this.name = name;
    this.hobby = hobby;
}

greet(){
  console.log ("Hi");
}

const user1 = new User("Shai", "painting");
user1.greet();
```



### ◻ Arrays:
```javascript
const hobbies = ["sport", "cooking", "reading"];
  console.log (hobbies[0]);

hobbies.push("working");

const index = hobbies.findIndex((item) => {
  return item === 'sport';  
});
console.log(index); //0
//equal to:
const index = hobbies.findIndex((item) => item === 'sport');

const editedHobbies = hobbies.map((item) => item = "!");


// Array Methods
function transformToObjects(numberArray) {
    // transform a list of numbers into a list of JavaScript objects. And return an array of objects    
    const newArray = numberArray.map ((item) => ({val:item}))
    return newArray;
}
// For example, for the provided input [1, 2, 3] the function should return [{val: 1}, {val: 2}, {val: 3}].



// Destructing
// To destruct an array we add '[]' 
const [firstName, lastName] = ["Shani", "Bider"];
  console.log (firstName);
  console.log (lastName);

// To destruct an object we add '{}'. Must use the same property name.
// Could also use alias
const { name: userName, hobby } = {
name: "Shani",
hobby: "fitness",
};
  console.log (usertName);
  console.log (hobby);
```


#### The Spread Operator `...`
```javascript
const hobbies = ["sport", "cooking", "reading"];

const user = {
name: "Shani",
hobby: "fitness"
}

const newHobbies = ["reading"];

const mergedHobbies = [...hobbies,...newHobbies];

const extendedUser = {
  isAdmin: true,
  ...user    //here ... will pull out all the 'key,value' pairs from the user object, and add them to that object here
}
/*
will log:
isAdmin: true
name: "Shani"
hobby: "fitness"
*/
```



```javascript
const password = prompt("your password");

if (password === "Hello"){
  console.log("Hello works");
} else if (password === "hello"){
  console.log("hello works");
} else {
  console.log("access failed");
}
```





### ◻
```javascript


```


































































<br>

---
<br>


## 🥇What I've Learned 
<img height=40px src="https://skillicons.dev/icons?i=react"> <img height=40px src="https://skillicons.dev/icons?i=js"> <img height=40px src="https://skillicons.dev/icons?i=nextjs"> <img height=40px src="https://skillicons.dev/icons?i=redux">

- [x] Mastered `React` from the ground up
- [x] Built multiple high-quality demo apps
- [x] Managed `complex state` efficiently with `React's Context API` & `Redux`
- [x] Implemented `user authentication`
- [x] Gained experience with `React Unit Testing`


## 🎯 Key Topics Covered 

- [x] Introduction to `React.js`
- [x] All the `core basics`: How React works, building components with React & building UIs with React
- [x] Building `components`, working with `props` & dynamic `data binding`
- [x] `React Hooks (in-depth)`
- [x] Working with built-in Hooks and building custom Hooks
- [x] `Styling React` apps with "Styled Components" and "CSS Modules"
- [x] Working with "Fragments" & "Portals"
- [x] Dealing with side effects
- [x] `Class-based components` and `functional components`
- [x] Sending `Http requests` & handling transitional `states + responses`
- [x] Handling `forms` and `user input` (incl. validation)
- [x] `Redux` & Redux Toolkit
- [x] `Routing` with React Router
-[x]  An in-depth introduction into `Next.js`
- [x] `Deploying` React Apps
- [x] Implementing `Authentication`
- [x] `Unit Tests`
- [x] Combining React with TypeScript
- [x] Adding Animations
<br>

---
<br>




> [!TIP]
> Feel free to explore my repositories and see my projects. I'm always open to collaboration and welcome feedback to improve and grow as a developer. Let's code something amazing together! 🚀😊👩‍💻💻


## 📫 Connect with me 😊
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shani-bider/)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shanibider.github.io/Portfolio/)
[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shanibider@gmail.com)

<footer>
<p style="float:left; width: 20%;">
Copyright © Shani Bider, 2024
</p>
</footer>
