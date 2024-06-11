// recieve 'onRestart' prop from App;
// Passing a function outside from GameOver to this button.
export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <p>
      {/* making Rematch button clickable, by adding 'onRestart' prop (came from App),
      to onClick prop. */}
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
