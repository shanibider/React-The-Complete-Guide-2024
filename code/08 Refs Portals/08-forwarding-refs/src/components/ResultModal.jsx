// 7. In order to forward refs from one component to another component,
// we need to import forwardRef.
import { forwardRef } from 'react';
// 3. Here we destructure ref from TimerChallenge.
// 8. We need to wrap with forwardRef the function declaration, and assign it to a variable.
// When wrapping a component with forwardRef, it recieves a second argument, ref. (first argument is props).
const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  return (
    // 4. And now we can assign it here as a value for this special ref prop.
    <dialog ref={ref} className="result-modal">
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
})

export default ResultModal;