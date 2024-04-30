export default function TabButton({ children, onSelect, isSelected }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
 
  // With the special 'on..' props, we can listen to events and execute a function when they occur.
 // Here we also add our oen 'on..' prop, onSelect, which will be executed when the button is clicked.
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
      {/* special props: children, give us access to the content that passes to your component
      between the component opening and closing tags (in app.js for example) */}
        {children}
      </button>
    </li>
  );
}
