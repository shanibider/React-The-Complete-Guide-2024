import { useState } from 'react';

// Working with State
export default function Player({ name, symbol }) {
  // create this variable beacause i want to know if the user is editing the name (boolean)
  const [ isEditing, setIsEditing ] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  // By default, playerName is a span element with the player's name.
  // Because isEditing is false.
  let playerName = <span className="player-name">{name}</span>;

  // if isEditing is true (meaning 'Edit' button was clicked and it triggered handleEditClick),
  // playerName will be an input 
  if (isEditing) {
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
