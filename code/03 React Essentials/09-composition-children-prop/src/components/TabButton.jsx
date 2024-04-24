// The special "children" prop -
// Here i use children prop to pass the content to the component.
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