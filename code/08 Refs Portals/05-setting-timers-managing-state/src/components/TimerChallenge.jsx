import { useState } from 'react';

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);  // 5. Adding state to manage when the timer is started or stopped.
  const [timerExpired, setTimerExpired] = useState(false); // 1. set a timerExpired state to false.

  function handleStart() {
    // 3. Built-in setTimeout function to set a timer.
    setTimeout(() => {
      setTimerExpired(true);  // 4. The goal in this function is to set setTimerStarted to true when the Start button is clicked.
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  // Next: 7. Clear the timer when the Stop button is clicked.
  function handleStop() {
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>

      <p>
        <button onClick={handleStart}>   {/*2.*/}
          {timerStarted ? 'Stop' : 'Start'} Challenge    {/*6.*/}
        </button>
      </p>

      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
}
