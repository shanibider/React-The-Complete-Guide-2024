import { useState } from 'react';

// Two way binding - get access to values entered by an input field (onChange, and managing a state),
// and this updated value reflected back

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName); // i want to manage the player's name
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  // recieve an elemnt 'event'
  function handleChange(event) {
    setPlayerName(event.target.value); // the value entered by the user
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      // listening to event (change in input) with onChange prop
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = 'Save';
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
