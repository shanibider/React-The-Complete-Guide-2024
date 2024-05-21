import Player from './components/Player.jsx';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;



{/*
This code replace this code:
<ol id="players">
  <li>
    <span className="player">
      <span className="player-name">Player 1</span>
      <span className="player-symbol">X</span>
    </span>
    <button>Edit</button>
  </li>
  <li>
    <span className="player">
      <span className="player-name">Player 2</span>
      <span className="player-symbol">O</span>
    </span>
    <button>Edit</button>
  </li>
*/}