import Player from './components/Player.jsx';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        {/* While the 2 players shared the same component (Player), they worked isolated from each other.
         Each one use their own Component instance! */}
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
