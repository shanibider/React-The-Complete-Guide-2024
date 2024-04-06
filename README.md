# React - The Complete Guide 2024 (incl. React Router & Redux) 🚀
Welcome to my Git repository for **React - The Complete Guide!** <img height=20px src="https://skillicons.dev/icons?i=react"> This 68 hours course has equipped me with comprehensive knowledge and practical experience in React development.

<div align=center>
  <img height="350px" src="https://github.com/shanibider/React---The-Complete-Guide-2024/assets/72359805/3d5c195b-4177-4da2-ae13-5234de5ed3cd">
</div> <br>

## 🏆 Course Overview -

## 🥇What I've Learned 
<img height=30px src="https://skillicons.dev/icons?i=react"> <img height=30px src="https://skillicons.dev/icons?i=js"> <img height=30px src="https://skillicons.dev/icons?i=nextjs"> <img height=30px src="https://skillicons.dev/icons?i=redux">

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


---



## 🖥 Codesandbox Coding Exercises:
[👉🏻 First React App](https://codesandbox.io/p/sandbox/first-react-app-zj5cx1?file=%2Fsrc%2FApp.js)
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








---

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
