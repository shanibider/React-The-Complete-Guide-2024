import { useState } from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

// object to store player names associated with their symbols
const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

// array full of arrays (refrences values)
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]; // Initial empty game board setup


// Function to derive the active player based on the game turns
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}


// Derive the game board state based on the game turns, with a brand new array (thanks to deep copy)
function deriveGameBoard(gameTurns) {
  // Create a deep copy of the initial game board to avoid mutation.
  // (not using the inital game board, but make a copy of it)
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

    // Populate the game board based on the game turns
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player; // Set the player symbol in the respective square
    // when im setting the player symbol im doing it on the original array, so after resetting the game,
    // the inital game board will be still this edited old array.
    // The solution is to make a deep copy of the initial game board, and then edit it. (let gameBoard = [...INITIAL_GAME_BOARD], and [...array])
  }
  return gameBoard;
}




function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {
  // adding new state to store player names.
  // 'players' will store player name associated with his symbol, 
  // and 'setPlayers' should be called whenever we click 'save' button in Player component.
  const [players, setPlayers] = useState(PLAYERS);
  /* same as writing:
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2'
  });
  */
  const [gameTurns, setGameTurns] = useState([]);


  const activePlayer = deriveActivePlayer(gameTurns); // Derive the active player based on the game turns
  const gameBoard = deriveGameBoard(gameTurns); // Derive the game board state based on the game turns
  const winner = deriveWinner(gameBoard, players); // Determine the winner based on the game board state
  const hasDraw = gameTurns.length === 9 && !winner; // Check if the game is a draw (all squares filled and no winner)


    // Handle selecting a square on the game board
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns); // Determine the current player

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }


  // handle restarting the game
  // I want this function to triggered from the button in GameOver, so i accept there 'onRestart' prop,
  // and here i'll declare 'onRestart' prop with this function as a value.
  function handleRestart() {
    setGameTurns([]); // Reset the game turns state
  }



  // Update player data - function to handle changing a player's name (setPlayers)
  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      // return a new object which is a new player state where i'll spread my 
      // old player into. And then I'll override one of the 2 properties of the player
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {/* adding 'onRestart' prop, with function to handle restart of the game */}
        {/* Render GameOver component if there's a winner or a draw and pass the handleRestart function */}
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        {/* Render GameBoard component and pass down the handleSelectSquare function and the game board state */}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
       {/* Render Log component and pass down the game turns */}
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
