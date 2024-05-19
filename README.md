# React - The Complete Guide 2024 (incl. React Router & Redux) 🚀
Welcome to my Git repository for **React - The Complete Guide!** <img height=20px src="https://skillicons.dev/icons?i=react"> This 68 hours Udemy course has equipped me with comprehensive knowledge and practical experience in React development, including components, props, React-hooks, forms, Redux, Routing, states + responses, Next.js. 🧾

### 🏆 Course Overview -

## 📔 Section 3: React Essentials - Components, JSX, Props, State & more:

###  ◻ Coding Exercise 3 - Building & Using a Component
```javascript
// create a new MainGoal component which outputs a paragraph of text that describes your main course goal,
// and then use it inside the App component's JSX code.
import React from 'react';
// DEFINE YOUR COMPONENT HERE
export function MainGoal() {
    <p>My main goal: Become React expert</p>;
}

function App() {
  return (
    <div id="app">
      <h1>Time to Practice!</h1>
      <p>
        Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
        text.
      </p>
      <p>
        Your <code>&lt;MainGoal&gt;</code> component should simply output some
        text that describes your main course goal (e.g., &quot;My main goal:
        Learn React in great detail&quot;).
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        &quot;My main goal:&quot;
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
        ).
      </p>
      {/* OUTPUT YOUR COMPONENT HERE */}     
      <MainGoal />
    </div>
  );
}
export default App;
```
![3](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/65007211-f106-41cb-8514-cd009430a86b)



<br>

---
<br>


## ✔ Starting Project:
I build over the starting project with each module learned.

![section 3- Starting project](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/9cde95de-790e-4653-9061-300fee55d65e)

```javascript
// starting project
function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
export default App;
```


###  ◻ Making Components Reusable with Props -
```javascript
/* 2. Merge into Object.
React merges all props into a single object.
{
   title= 'Components'
   description= 'The core UI...'
}
*/

// 3. Receive Props as an argument.
// Props are passed to the component function as the first argument by React.
// This object has this custom <key, value> pairs: { title: '...', description: '...', image: '...' }
function CoreConcept(props) {
  return (
    <li>
      {/* Can access props.image to get hold of the value that's set on the image key below */}
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      {/* Rendering the Header component (can be reused) */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {/* 1. Set props (can be: String, Number, Object, Array).
          Props are passed as an object, and are "custom HTML attributes" set on component. */}
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept title="Props" />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}
export default App;
```



##  ◻ Coding Exercise 4 - Outputting Dynamic Content:
```javascript
// the user's first name, last name and title is output dynamically by using JSX' "curly brace" syntax.
// For example, { userData.title } is replaced with the actual string value stored in userData.title
// when the component is rendered to the screen.
import React from 'react';

export const userData = {
  firstName: 'Shani', 
  lastName: 'Bider', 
  title: 'Developer',
};

// Edit the User component code to output the userData data
export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
     {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}
// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <User/>
    </div>
  );
}
export default App;
```
![5](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/887b4b01-ab98-4345-b08c-2e6911fdae32)





### ◻ Alternative Props Syntax:
```javascript
import { CORE_CONCEPTS } from './data.js';

// Using another js feature: object destructuring. By adding '{}', we can destructure the first parameter of this function.
// I can target the different properties of the incoming object by name (same properties as I set below)
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Setting the props */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* Shortcut to pull out all the 'key,value' pairs of an object  */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}
export default App;

// data.js:
export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
...];
```


##  ◻ Coding Exercise 5 - Working with props
```javascript
export function CourseGoal(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
      <CourseGoal
      title="Learn React"
      description="In-depth"
      />
      <CourseGoal
      title="Practice React"
      description="Practice working with react"
      />
      </ul>
    </div>
  );
}
export default App;
```
![4](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/ce2da105-bdab-44de-ada9-9e2625101f3c)




#### ❔ Quiz - Dynamic values and Props
- Which values can be output as dynamic values in JSX (i.e., between curly braces)?
    - You could output expressions like "1 + 1", variables / constants that hold values, the result of calling a function etc.

- How should you typically load / use images in React projects?
    - By "importing" the image, a production-safe path gets generated under the hood.

- How can you assign a dynamic value to an HTML element attribute?
    - You simply replace the text value you would normally set for attributes with the dynamic (curly-brace-wrapped) value.

- Which core React concept can increase the reusability of React components?
    - Props are essentially custom attributes that can be set on components.

- How do "props" work in React?
    - React automatically passes a props object as the first argument to the receiving component

- Which of the following four code examples for setting & extracting props would NOT work as intended?
I.e., which example will NOT output the text "Priority: 5" on the screen.

```javascript
<MyComponent priority={5} />
function MyComponent(priority) {
  return <p>Priority: {priority} </p>
```
The error is subtle but this example does NOT use object destructuring. So here, the "priority" prop is not pulled out of the props object. Instead, it's now the entire props object that's named "priority". This wouldn't be a problem since the name is up to you. But it's now the entire object that's output in the paragraph, not the "priority" property. Therefore, the output would not be "Priority: 5" but instead "Priority: [Object object]" (or something like that).


This will be correct answers:
```javascript
<MyComponent priority={5} />
function MyComponent({...props}) {
  return <p>Priority: {priority} </p>

<MyComponent priority={5} />
function MyComponent(props) {
  return <p>Priority: {priority} </p>

<MyComponent priority={5} />
function MyComponent({priority}) {
  return <p>Priority: {priority} </p>
```


### ◻ More props Syntax:
```javascript
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

// Here I move all the components to their folder, and import them here 
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}
export default App;
```


```javascript
// components/ CoreConcept
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
```


```javascript
// components/ Header
import reactImg from '../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
```





### ◻ The special "children" prop 
```javascript
// children prop is used to pass the content to the component.
// This is a prop that set by react.
// This children prop is refer to the content between the opening and closing tags of the component.
// i can output that content by using {children} or {props.children} in the component.
// (i.e. <TabButton>Content</TabButton>)
export default function TabButton({ children }) { // here i use object destructuring to get the children properity
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
// same as:
export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}


// "Children" Props vs "Attribute Props"
// Using Attribute:
// for smaller pieces of information
<TabButton label="Components"></TabButton>

function TabButton({ label }) { 
  return <button>{label}</button>;
}

// Using Children:
// for a single piece of renderable content
<TabButton>Components</TabButton>

function TabButton({ children }) { 
  return <button>{children}</button>;
}
```




###  ◻ Coding Exercise 6 - Component Composition
Create a reusable Card component that takes a name prop as an input and, in addition, can be wrapped around any JSX code:
```javascript
import Card from './Card';

function App() {
  return (
    <div id="app">
      <h1>Available Experts</h1>
      <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
      </Card>
    </div>
  );
}
export default App;

// card.js
/* The children prop is a special prop that's automatically provided to every component function. It contains the wrapped content as a value.
    So the children prop's value for this code:
    <Card>
      <p>Hi there</p>
    </Card>
    would be <p>Hi there</p>.
*/

export default function Card({ name, children }) {
    return (
        <article className="card">
        <h2>{name}</h2>
        {children}
        </article>
    );
}


// index.css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#dfdee0, #c3c3c4);
  color: #e5d9f1;
  min-height: 100vh;
}
.card {
  margin: 2rem auto;
  padding: 2rem;
  max-width: 30rem;
  border-radius: 6px;
  background: linear-gradient(#254041, #203031);
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
}
.card h2 {
  margin: 0;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: #e5d9f1;
}
.card p {
  margin: 0.5rem 0;
}
.card a {
  color: #b3f4f6;
  text-decoration: none;
}
```      
![3](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/f0a3487f-bb42-4b31-b75c-cd27c8d5c871)



### ◻ Coding Exercise 7 - Racting to Event
```javascript
// Your goal is to change the email, password and loggedIn values when the button in the App component is pressed
// Change them to any values of your choice (except loggedIn => that should be changed to true)
// You DON'T need to fetch the values entered into the <input /> fields
// You'll learn about that later in the course - for the moment, those fields are just there to look good :-)
export const user = {
  email: '',
  password: '',
  loggedIn: false,
};

function handleLogin(){
   user.email = 'test@example.com';
   user.password = 'test';
   user.loggedIn = true;
}

// Please note: The login does not actually work!
// This exercise is just about practicing event handling
// You'll learn how to add user authentication to React apps later in the course!
function App() {
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={handleLogin}>Login</button>
      </p>
    </div>
  );
}
export default App;
```

![7](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/97349991-51de-4aad-bae6-681cb3a8cbc3)






### ◻ Coding Exercise 8 - Event Handlers
```javascript
export const user = {
  name: '',
};

function App() {
  // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
  function handleCreateUser(name) {
    user.name = name;
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
        <input type="text" />
      </p>

      <p id="actions">
        <button onClick={ () => handleCreateUser('Shani') }>Create User</button>
      </p>
    </div>
  );
}
export default App;
```

![8](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/6fc6c78b-b1fc-4869-a2e9-abadc6da9091)


#### ❔ Quiz - Event Handling
- How should you typically store your component functions?
Split across multiple files. (One component per file).

- What's the purpose of the special "children" prop?
"children" will receive whichever content you pass between the opening and closing tags of your component.

- How can you handle user events in React projects?
Via the built-in 'onXYZ' props (e.g. onClick).

- To execute code upon events, which value must be passed to event props like onClick?
A pointer to the function that sould be executed (onClick={handleClick}).

- How can you "configure" the execution of an event-dependent function (e.g., define which arguments get passed to it)?
By wrapping the execution of your event handling function with another function, it's that other function that's passed as a value to the event-handling prop. Therefore, your main function (=> handleClick in this example) does NOT get executed too early but instead only when the event occurs. (onClick = { () => handleClick(5)}).




### ◻ Coding Exercise 9 - Working with State
```javascript
// You're working on a part of an online shop where a discounted price should be displayed on the screen once the user clicked a button.

// Your task is to add an event listener to listen for clicks on the button that's already included in the App component.

// Upon a button click, the price should change from $100 to $75.
// Add a state value to the existing App component function and make sure the state value is both updated upon button clicks and output as part of the JSX code.

// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();

import React from 'react';
export default function App() {
    const [ price, setPrice ] = React.useState('$100');    
    
    function onSelect(){
        setPrice('$75');        
    }
    
    return (
        <div>
            <p data-testid="price">{price}</p>
            <button onClick={onSelect}>Apply Discount</button>
        </div>
    );
}
```
![8](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/5066bf45-ab4d-45f4-bcb2-3b51b8d7f1d4)



#### ❔ Quiz - State and computed values
- What's the purpose of "State" in React apps?
The component to which the state belongs and its child and descendent components will be re-evaluated as state changes.





### ◻ Coding Exercise 10 - Conditional Content
```javascript
/*
You're working on a part of a web app that's responsible for showing a warning
when a user is about to perform a dangerous action.

Therefore, your task is to conditionally show a warning box once a user has clicked a specific button.
Inside that warning dialog, another button allows users to dismiss the warning. */
import React from 'react';

export default function App() {
    // state that controls whether the warning box is visible or not. 
    const [isDeleting, setIsDeleting] = React.useState(false);
    
    
    function deleteHandler(){
        setIsDeleting(true);
    }
    
     function proceedHandler(){
        setIsDeleting(false);
    }
    
    return (
      <div>
      
      {isDeleting ? 
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>
        : 
        ' '
      }
        
       <button onClick={deleteHandler}>Delete</button>
         
      </div>    
    );
}

/* Alternatively, you could use the && "trick":
return (
  <div>
    {isDeleting && <div data-testid="alert" id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={proceedHandler}>Proceed</button>
    </div>}
    <button onClick={deleteHandler}>Delete</button>
  </div>    
);
*/
```
![10](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/e1e3c8ea-68a5-4fcf-8f9b-7d2d4ce1823e)










### ◻ Coding Exercise 11 - Dynamic Styling
```javascript
/* Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app.*/
import React from 'react';

// don't change the Component name "App"
export default function App() {
      const [isClicked, setIsClicked] = React.useState(false);

function handleClick(){
    setIsClicked(true);
    // setHighlighted(isHighlighted => !isHighlighted);
    }
}
    return (
        <div>
            <p className={isClicked ? 'active' : undefined}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}
```
![11](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/4fbc70bd-74d7-48d5-8420-236e4691d8ce)






### ◻ Coding Exercise 12 - Dynamic List Content
```javascript
/* You're working on a "Todo List" web app and your task is to output a list of dummy todo items
dynamically. For this task, a Todo component has been prepared for you,
though you must still add some code to it to receive and output the todo text.

To be more precise: In the App component, you should transform the DUMMY_TODOS array that's
provided to you to a list of JSX elements
(<Todo> elements to be precise).
Every Todo component item must receive and output the todo text via a prop called text. */

//Todo.js:
import React from 'react';
// As a first step, you should make sure that the Todo component is able to receive and output a text prop:
export default function Todo(props) {
    return(
    <li>
    {props.text}
    </li>
    );
}
//With that out of the way, you can re-use this Todo component for different todo items.


// App.js:
import React from 'react';
import Todo from './Todo'
// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];
// Therefore, as a next step, you should dynamically map the DUMMY_TODOS array to an array full of <Todo /> JSX elements (which then can be output as part of the App component's JSX code). This is achieved via the built-in map() method:
export default function App() {
  
return (
<ul>  
 { DUMMY_TODOS.map( todo  => 
  <Todo text={todo}/>) }
   </ul>
    );
}

index.css:
body {
    font-family: sans-serif;
    margin: 0;
    padding: 3rem;
    background-color: #2d2c2c;
    color: #959090;
    text-align: center;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
    margin: 1rem;
    padding: 1rem;
    background-color: #8567fd;
    color: white;
    border: 2px solid #8567fd;
    border-radius: 6px;
}
```
![12](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/202927fb-12be-4c8a-9d3c-6d8e8982e96b)


#### ❔ Quiz - Conditional Content & Dynamic Lists
![quiz3](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/fcfda662-a56d-46cf-a598-690c5f6be881)
![quiz4](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/388c70c6-afbf-44f5-aac0-0d29d96fab85)

![quiz](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/74f0c209-ff69-4a2e-a501-c787a8c6f9fe)

![quiz2](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/09318932-0a6c-4a67-b100-04fd9dd794c1)


## ✔ Finished Project:
![section 3- finished project](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/21a1e991-a991-4002-8542-99fea1ded567)

<br>

---
<br>





# 📔 Section 4: React Essentials - Deep Dive

### ◻ Coding Exercise 13 - Using Fragments
```javascript
/* Your task is to edit the existing Summary component such that it outputs the following content:
<h1>Summary</h1>
<p>{text}</p>
Inside the Summary component, this content must not be wrapped by any other HTML element!
For example, this code would be wrong:
<div>
  <h1>Summary</h1>
  <p>{text}</p>
</div> */

function Summary({ text }) {
  return(
  <>
  <h1>Summary</h1>
  <p>{text}</p>
</>
);
}

function App() {
  return (
    <div id="app" data-testid="app">
      <Summary text="Fragments help you avoid unnecessary HTML elements." />
    </div>
  );
}

export default App;
```
![13](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/01645047-ed68-4db9-bb79-f2ee94775cd3)





### ◻ Coding Exercise 14 - Forwarding Props
```javascript
/* Your task is to work on the Input component such that it either returns a <textarea> element or an <input> element, depending on whether a richText prop set on Input is true or false.

I.e., if used like this:
<Input richText />
the Input component should render a <textarea>. Otherwise, it should render an <input>.

In addition, the Input component should forward all other props directly to the returned <textarea> or <input> elements.
I.e., it should be usable like this:
<Input type="text" placeholder="Your name" />
(as seen in the existing App.js file) */


//app.js
import Input from './Input';
function App() {
  return (
    <div id="content">
      <Input type="text" placeholder="Your name" />
      <Input richText placeholder="Your message" />
    </div>
  );
}
export default App;


// input.js
// destructuring that prop and then using it in an if statement.
// As a second step, the Input component is then adjusted to collect all other props that may be set on the component via the special "rest property" syntax.
export default function Input( {richText, ...props} ) {
  // return a <textarea> if a richText prop is true
  // return an <input> otherwise
  // forward / set the received props on the returned elements
    
  // The props object that's created by that syntax is then, as a last step, spread onto the returned elements.
  if (richText){
     return <textarea {...props}/> ;
  }
  else
  {
     return <input {...props}/>;
  }
}


index.css:
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#979a99, #bcc1bf);
  color: #2c312f;
  min-height: 100vh;
}
#content {
  width: 25rem;
  margin: 2rem auto;
  padding: 1rem;
  background: linear-gradient(#5d6965, #5b6d66);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
}
input, textarea {
  font: inherit;
  padding: 0.25rem;
  border-radius: 4px;
  border: 1px solid #979a99;
  background: #e5e8e7;
  width: 100%;
  margin: 1rem 0;
}
```
![14](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/0c6face0-6ed3-4e63-b749-395afbf6b003)








### ◻ Coding Exercise 15 - Creating Flexible Components
```javascript
/* Your task is to build a highly re-usable, custom Button component that can be used in all the following ways
(also see the code in the App.js file):
"Filled" mode (default):
<Button>Default</Button>
or
<Button mode="filled">Filled</Button>
Hint: To make sure the icon becomes visible, wrap the icon component in the button with a <span> that has the class "button-icon" on it.
Also wrap the children prop with a <span>!
You find all the styles (CSS classes) that are required to build a button that supports these different "modes" in the provided index.css file!
All buttons need a button CSS class - and then, depending on their mode, additional classes.
In addition, the custom Button component must accept all standard props that could be set on the built-in <button>.
These props should be forwarded to the default <button> element that will be used in the custom Button component.

Your task is to work on the Button component provided in the Button.js file. Don't add multiple custom components, instead work on that one provided component and make sure that it supports all these different modes & features.
Also make sure, that if no mode is set, the "filled" mode is assumed as a default. */

// Button.js:
// mode prop is extracted from the incoming props object.
// Then it used to dynamically construct a string that contains all to-be-assigned CSS classes.
// Since the task required a default "button mode" of "filled", the mode prop is assigned a default value of 'filled'.
// Therefore, Button can be used without the mode prop and still get that "filled look".
// In addition, the special, built-in children prop is extracted to output the content passed between the <Button> tags.
// As a next step, to support setting all the default <button> props, all remaining props are collected in a props object via ...
// The custom Button should also support icons. Therefore, an Icon prop is extracted from the incoming props.
// It's called Icon and not icon because this prop should hold a component identifier (i.e., a pointer at a component function) as a value.

export default function Button( { children, className, mode= 'filled', Icon, ...props } ) {
 // Todo: Build this component! Important: 
 // Wrap the icon with a <span className="button-icon"> to achieve the target look
 // Also wrap the children prop with a <span>
 
 let cssClasses = `button ${mode}-button`;
 
 // In addition, if the Icon prop is set, the CSS classes are again extended to add the icon-button class
 if (Icon){
     cssClasses += ' icon-button';
 } 
 // Since those props could also include the 'className' prop, that prop's value is merged into the cssClasses string:
 if (className){
     cssClasses += ' ' + className;
 }  
 // These props are then spread onto the built-in <button> element:
 return(
     <button className={cssClasses} {...props}>     
     { Icon && (
      <span className="button-icon">
      <Icon/>
      </span>
     )}     
     <span>{children}</span>     
     </button>
 );
}


// App.js:
import Button from './Button';
import HomeIcon from './HomeIcon';
import PlusIcon from './PlusIcon';
function App() {
  return (
     <div id="app">
      <section>
        <h2>Filled Button (Default)</h2>
        <p>
          <Button>Default</Button>
        </p>
        <p>
          <Button className="filled-button" mode="filled">Filled (Default)</Button>
        </p>
      </section>
      
      <section>
        <h2>Button with Outline</h2>
        <p>
          <Button mode="outline">Outline</Button>
        </p>
      </section>
      
      <section>
        <h2>Text-only Button</h2>
        <p>
          <Button mode="text">Text</Button>
        </p>
      </section>
      
      <section>
        <h2>Button with Icon</h2>
        <p>
          <Button Icon={HomeIcon}>Home</Button>
        </p>
        <p>
          <Button Icon={PlusIcon} mode="text">
            Add
          </Button>
        </p>
      </section>
      
      <section>
        <h2>Buttons Should Support Any Props</h2>
        <p>
          <Button mode="filled" disabled>
            Disabled
          </Button>
        </p>
        <p>
          <Button onClick={() => console.log('Clicked!')}>Click me</Button>
        </p>
      </section>
      
    </div>
  );
}
export default App;

// index.css:
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#f3f0f8, #d6d2db);
  color: #e5d9f1;
  min-height: 100vh;
}
section {
  margin: 1rem auto;
  max-width: 30rem;
}
h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #030a1b;
}
.button {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
}
.icon-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.button-icon {
  width: 1rem;
  height: 1rem;
}
.filled-button {
  background: linear-gradient(#7fa1f7, #6085e4);
  color: #030a1b;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}
.filled-button:hover {
  background: linear-gradient(#89a9fb, #6890f6);
}
.filled-button:disabled {
  background: #a3a9b7;
  color: #3a445c;
  box-shadow: none;
  cursor: not-allowed;
}
.outline-button {
  border: 1px solid #2658d6;
  color: #2658d6;
}
.outline-button:hover {
  background: #cbd8fc;
}
.text-button {
  color: #2658d6;
}
.text-button:hover {
  background: #cbd8fc;
}

// PlusIcon.js:
export default function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
    </svg>
  );
}
// HomeIcon.js:
export default function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
        clipRule="evenodd"
      />
    </svg>
  );
}
```
![15](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/2d014149-8799-4927-8e33-27d56c9713cc)









### ◻ Coding Exercise 16 - Two-Way-Binding
```javascript
/* Your task is to collect the values entered into the two input controls
(<textarea> and <input>) via two-way binding.
In addition, you should pass the collected values via the appropriate
props to the already existing Review component.
The final app should allow users to enter values and then see those entered values in the Review
component which is output below the input components. */
// App.js
import React from 'react';
import Review from './Review'
function App() {
// To store the entered values
    const [userFeedback, setUserFeedback] = React.useState('');
    const [studentName, setStudentName] = React.useState('');

//  event object is generated & provided automatically by React.
// event.target refers to the input control, event.target.value therefore contains the value provided by the user.
  function handleFeedbackChange(event) {
    setUserFeedback(event.target.value);
  }
  function handleNameChange(event) {
    setStudentName(event.target.value);
  }  
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>        
        <p>
{/*first step is to listen to value changes on the <textarea> and <input> elements.*/}
          <label >Your Feedback</label>
          <textarea onChange={handleFeedbackChange} value={userFeedback}/>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={handleNameChange} value={studentName}/>
        </p>
        </section>      
      <section id="draft">
        <h2>Your feedback</h2>

{/* To complete the task, the state values passed to Review component by setting its feedback and student props */}
        <Review feedback={userFeedback} student={studentName}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}
export default App;

// Review.js
export default function Review({ feedback, student }) {
  return (
    <figure>
      <blockquote>
        <p>{feedback}</p>
      </blockquote>
      <figcaption>{student}</figcaption>
    </figure>
  );
}
// index.css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#180d27, #0c0219);
  color: #e5d9f1;
  min-height: 100vh;
}
#feedback {
  max-width: 30rem;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #669ae7;
  color: #041023;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}

#feedback p {
  margin: 0.5rem 0;
}
#feedback label {
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  color: #364660;
  font-size: 0.85rem;
  margin: 0.25rem 0;
}
#feedback input,
#feedback textarea {
  font: inherit;
  display: block;
  margin: 0 0 1rem 0;
  padding: 0.5rem;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #798aa9;
  background-color: #b4c4e6;
  color: #041023;
}
#draft {
  font-family: 'Lato', sans-serif;
  max-width: 30rem;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #67d7b0;
  color: #0b3929;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  text-align: center;
}
#draft figure {
  margin: 0;
  padding: 0;
}
#draft blockquote {
  margin: 0 2rem;
  padding: 0.5rem 1rem;
  background-color: #65b69a;
  border-radius: 4px;
  color: #042217;
  font-style: italic;
}
#draft blockquote p {
  margin: 0;
}
#draft figcaption {
  margin: 0.2rem 0;
  font-size: 0.75rem;
}
#draft button {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  background-color: #0b3929;
  color: #ecf8f4;
  font-size: 1rem;
  cursor: pointer;
}
```
![16](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/c7a9133e-2689-4dd6-8e7c-f899e47984a9)












### ◻ Coding Exercise 17 - Dynamic Styling with Inline Styles
```javascript

```
### ◻ Coding Exercise 18 - Dynamic Styling with CSS Classes
```javascript

```
### ◻ Coding Exercise 19 - Exercise: Dynamic Styles
```javascript

```
### ◻ Coding Exercise 20 - Exercise: Fix Errors
```javascript

```










































































































































































































<br>

---
<br>

## 📔 Section 2: JavaScript Refresher:
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



### ◻ Functions as values
```javascript
function handleTimeout(){
  console.log("Timed out");
}

function handleTimeout2 = () => {
  console.log("Timed out");
}

setTimeout(handleTimeout,2000);  // setTimeout is default js function
setTimeout(handleTimeout2,3000);
setTimeout( () =>{
  console.log("Timed out");
}, 4000);


// Functions inside of functions
function init() {
  function greet() {
    console.log(“Hi!“);
  }

  greet();
}
init();


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
```


#### JS Array Functions
```javascript
Particularly important in this course are:

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
```





<br>

---
<br>
<div align=center>
  <img height="350px" src="https://github.com/shanibider/React---The-Complete-Guide-2024/assets/72359805/3d5c195b-4177-4da2-ae13-5234de5ed3cd">
</div> <br>

---

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
