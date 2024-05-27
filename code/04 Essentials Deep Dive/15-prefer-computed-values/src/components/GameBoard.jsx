const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Here we should expect 2 props - onSelectSquare and turns
export default function GameBoard({ onSelectSquare, turns }) {
// now we will need to turn 'turns' array into multi-dimention array.
// now we lift the state up, so we dont need to manage it here, we just need to render the game board
  let gameBoard = initialGameBoard;

  // now we want to override 'gameBoard' with data dewrive from 'turns' (if we have turns)
  for (const turn of turns) {
    // For each turn, we destructures the info about the turn that occured, 
    // from that object that stores in 'turns' array
    const { square, player } = turn;
    const { row, col } = square; // square is an object contains row and col, indicating the position on the board.

    // updates the gameBoard at the specified row and col with the player's symbol.
    gameBoard[row][col] = player; 
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
              {/* we add here anonymous function, so we get full control on how onSlectSqure will be executed,
              so how handleSelectSquare will be handeled, and we can pass (rowIndex, colIndex) arguments to this function,
              and therfore in the end to 'handleSelectSquare' function, since its the value for 'onSelectSquare' prop.
              and with that we making sure that the data arrives and store. */}
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
