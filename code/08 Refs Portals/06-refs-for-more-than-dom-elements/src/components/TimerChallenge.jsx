// Using useRef - for value that must be managed but isn't really a state (don't impact the UI)
import { useState, useRef } from 'react';

export default function TimerChallenge({ title, targetTime }) {

  // 11. Creating timer ref.
  // 14. Now it will be component instance specific. Every component instance of TimerChallenge will get his own timer ref,
  // That works independent from the other refs that belong to the other instances of that component.
  const timer = useRef();

  // 15. Refs, like state values, not lost its value when the component function re-executes.
  // But unlike states, setting the value (timer.current), dosen't cause this component function to execute again.

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    // 10. To store the returned value from setTimeout, we use useRef.
    // 12. Must target this current property.
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  // 7. Adding a function to clear the timer when the Stop button is clicked.
  function handleStop() {
    // 8. Built-in clearTimeout function, recieves pointer/id (timer reference) as an argument.
    // 9. That pointer is returned by the setTimeout function. (so we can store it as const (see below)).
    clearTimeout(timer.current); // 13. Clear it with timer.current
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
}


/* Without the use of useRef, we would have to declare the timer variable outside the component;
which would make it a global variable, but that's not a good soluion.
By using useRef,
we can keep 'timer' inside the component and still have access to it across re-renders.

import { useState, useRef } from 'react';
let timer;

export default function TimerChallenge({ title, targetTime }) {

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    const timer = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer);
  }
*/