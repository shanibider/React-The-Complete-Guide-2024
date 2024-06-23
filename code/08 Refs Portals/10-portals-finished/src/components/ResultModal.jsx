import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom'; 

// Here i destructured the props and added the remainingTime prop
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  // Using remainingTime to calculate a score and set the userLost variable
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2); // Convert to seconds
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100); // Calculate score

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  // createPortal render this jsx code to another place in the dom.
  return createPortal(
    <dialog ref={dialog} className="result-modal">

    {/* Output message conditionally if userLost is true. */}
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{' '}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal') // second argument; the target - html element that this code should be rendered to.
    // Therefore we add a div with id="modal" to the index.html file.
  );
});

export default ResultModal;
