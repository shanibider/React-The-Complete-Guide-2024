import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // "setIsEditing(true);" this is not good enough because we want to reverse the value of isEditing.
    // When updating a state based on previous state, it's better to use a function as an argument to the setter function!
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  // Another approach to handle the button caption:
  // let btnCaption = 'Edit';

  if (isEditing) {
    // value attribute is used to set the value of the input element.
    // I use dynamic value, the name prop.
    playerName = <input type="text" required value={name} />;
    // btnCaption = 'Save';
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/* ternary expression */}
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
    </li>
  );
}
