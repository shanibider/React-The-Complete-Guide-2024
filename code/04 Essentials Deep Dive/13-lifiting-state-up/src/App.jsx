import { useState } from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  // toggles the value of "activePlayer" between 'X' and 'O' each time it is invoked.
  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
      {/* an ordered list contains two "Player" components, each with different props.
      The "isActive" prop is set based on whether the "activePlayer" state variable matches the symbol prop ('X' or 'O').
      This allows the CSS class "highlight-player" to highlight the active player.*/}
        <ol id="players" className="highlight-player">      {/* adding css style to highlight the current player */}
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      LOG
    </main>
  );
}

export default App;
