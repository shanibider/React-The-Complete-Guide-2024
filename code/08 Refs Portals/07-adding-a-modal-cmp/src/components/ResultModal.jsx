 // The purpose is to add a dialog element to the ResultModal component.
 // The dialog element will contain the result of the challenge and the target time. The dialog will also have a button to close the dialog. The dialog element will be styled with the result-modal class.
 export default function ResultModal({ result, targetTime }) {
// Next we want to show the dialog with a dimmed background.
// To do this, we need to add the open attribute to the dialog element. 
  return (
    <dialog className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
