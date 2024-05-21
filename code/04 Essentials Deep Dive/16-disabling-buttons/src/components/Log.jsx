// Creating Log - log the selected player on the screen
// we will need 'turns' prop
export default function Log({ turns }) {
  return (
    <ol id="log">
    {/* i will map turns prop to list of list items. Each item will contain {square}, and {player},
    therfore i will write: {turn.player} selected {turn.square.row},{turn.square.col}.
    i will add a key. Always when outputting a dynamic list. The key could be the combination between row and col.
    `${}` - is js syntax */}
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
