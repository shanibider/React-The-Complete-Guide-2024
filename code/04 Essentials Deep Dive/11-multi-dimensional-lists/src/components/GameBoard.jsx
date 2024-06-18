// 2D array (an array of arrays)
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// The outer list represents rows, and each inner list represents columns within a row (an array).
// Each cell is rendered as a button, initially showing null values.

// top element is an ordered list (<ol>) with an id of game-board.
// 1. Mapping Rows: The array is being mapped to generate its rows.
// Each row is mapped to a list item (<li>), and the rowIndex is used as the key prop to uniquely identify each row.
// 2. Mapping Columns: Each row is itself an array, and its elements (playerSymbol) are mapped to individual list items (<li>).
// Inside each list item, there's a button displaying the playerSymbol. Initially, all buttons display null.

export default function GameBoard() {
  return (
    <ol id="game-board">

      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}> {/* Each row as a key prop of 'rowIndex'*/}
          <ol>

            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}> {/*'colIndex' is key prop for each cell in the row.*/}
                <button>{playerSymbol}</button>
              </li>
            ))} {/* End of callback function of row.map() */}

          </ol>
        </li>
      ))} {/* End of callback function of initialGameBoard.map() */}
      
    </ol>
  );
}


/*
Array.map()-
Parameters:
callbackFn:
A function to execute for each element in the array.
Its return value is added as a single element in the new array.
The function is called with the following arguments:
1. element-
The current element being processed in the array.
2. index-
The index of the current element being processed in the array.
3. array-
The array map() was called upon.
*/

