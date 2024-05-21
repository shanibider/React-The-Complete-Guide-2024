import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  // add state to manage the game board
  // default value is initialGameBoard
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    // update the game board based on the selected square clicked.
    // we want to keep previous state, so we use it as an argument in the callback function
    setGameBoard((prevGameBoard) => {
        // create a copy of the previous game board using spread syntax
      const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        // set the value of the selected square to 'X'
      updatedBoard[rowIndex][colIndex] = 'X';
      return updatedBoard;     // return the updated game board
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
              {/* adding onClick */}
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
