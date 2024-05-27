import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js'; // import the WINNING_COMBINATIONS array

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


// Function to derive the active player based on the game turns.
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'; // Default starting player is 'X'.
    // If there are turns and the first turn's player is 'X', the current player should be 'O'.
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer; // Return the derived active player.
}



function App() {
  const [gameTurns, setGameTurns] = useState([]); // State to keep track of game turns.
  
  // const [hasWinner, setHasWinner] = useState(false);
  // const [activePlayer, setActivePlayer] = useState('X');

    // Derive the active player based on the game turns.
  const activePlayer = deriveActivePlayer(gameTurns);

  // Initialize the game board.
  let gameBoard = initialGameBoard;

    // Populate the game board based on the game turns.
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player; // Set the player symbol in the respective square.
  }

  let winner; // Variable to store the winner if there is one.

  // Check for a winner by comparing squares against the winning combinations.
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    // If all three squares in a combination are the same and not null, we have a winner.
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol; // Set the winner to the symbol ('X' or 'O').
    }
  }


  // We know we have a draw if all 9 fileds are full. 
  // It means game turns is 9. (we can see it in the log on the screen)

  // Check if the game is a draw (all squares filled and no winner).
  const hasDraw = gameTurns.length === 9 && !winner;



    // Function to handle selecting a square on the game board.
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));

      // Update the game turns with the new turn.
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns); // Determine the current player.

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
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
        {/* Will use 'GameOver' component if we have a winner, or draw.
        and we will pass the sympbol throught 'winner' prop. */}
        {(winner || hasDraw) && <GameOver winner={winner} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
