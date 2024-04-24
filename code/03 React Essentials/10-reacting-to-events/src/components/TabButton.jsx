export default function TabButton({ children }) {
  // click event handler
  function handleClick() {
    console.log('Hello World!');
  }

  //  Add a click event listener to the button element
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
