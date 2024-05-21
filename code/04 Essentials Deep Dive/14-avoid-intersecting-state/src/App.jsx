import { useState } from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';

function App() {
  // array that keeps track of the turns taken in the game.
  // Each turn is represented as an object with details about the player and the square selected.
  const [gameTurns, setGameTurns] = useState([]); // whenever a square is clicked, we will add a new turn to this array
  const [activePlayer, setActivePlayer] = useState('X');


  // called when a square is selected, and toggles the activePlayer state between 'X' and 'O'.
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    

    // here we need some information about the turn that took place  
  setGameTurns((prevTurns) => {   // recieve an array of previous turns
    // we create currentPlayer to not use activePlayer directly
      let currentPlayer = 'X';
      // If the last turn was made by 'X', the current player will be 'O', and we have at least one turn
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      // Adds the new turn to the beginning of 'gameTurns' array,
      // ensuring the most recent turn is always at the start of the array.
      // 1. creation of a new array  
      // 2. This part of the array is an object representing the new turn that just took place.
      // It has two properties:
      // square: object with two properties, row and col, representing the position of the square on the game board that was selected.
      // The values for row and col are provided by the rowIndex and colIndex parameters of 'handleSelectSquare'.
      // player: This indicates which player made the move. The value is provided by the currentPlayer variable, which is determined based on the previous turns.
      // 3.  ...  is used to take all the elements of the prevTurns array (array holding all previous turns) and insert them into the new updatedTurns array.
      // By placing the spread operator after the new turn object, you ensure that the new turn is added at the beginning of the updatedTurns array, followed by all the previous turns.
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns, // Add the previous turns to the array
      ];

      return updatedTurns;
    });
  }



  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;


/*
### Example
Let's assume the `prevTurns` array has the following structure before the new move is made:
const prevTurns = [
  { square: { row: 0, col: 0 }, player: 'X' },
  { square: { row: 1, col: 1 }, player: 'O' },
];

When `handleSelectSquare(2, 2)` is called and `currentPlayer` is determined to be 'X':
const updatedTurns = [
  { square: { row: 2, col: 2 }, player: 'X' },
  { square: { row: 0, col: 0 }, player: 'X' },
  { square: { row: 1, col: 1 }, player: 'O' },
];

The result is a new array with the new turn prepended, which is then used to update the state, 
maintaining the sequence of game turns with the latest move at the front.
*/
