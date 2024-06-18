import { useState, useRef } from 'react';

export default function Player() {
  // create a ref to the input field to access its value.
  // we use the useRef hook to create a ref,
  // Initialize it with useRef(), and assign it to the input field.
  // we can access the value of the input field using the current property of the ref.
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    // set the entered player name with the value of the input field, to the state
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ''; // clear the input field
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
