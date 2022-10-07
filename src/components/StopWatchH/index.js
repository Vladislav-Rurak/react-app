import { useEffect, useState } from 'react';

function StopWatchH () {
  const [count, setCount] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const startHendler = () => {
    setIsRunning(isRunning => !isRunning);
  };

  const tick = () =>
    setCount(count => {
      const newTime = new Date(count);
      newTime.setSeconds(newTime.getSeconds() + 1);
      return newTime;
    });

  const reset = () => setCount(new Date(0, 0, 0, 0, 0, 0, 0));

  useEffect(() => {
    let timerId = null;
    if (isRunning) {
      timerId = setTimeout(tick, 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <article>
      <div>{count.toLocaleTimeString('en-GB')}</div>
      <button onClick={startHendler}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </article>
  );
}

export default StopWatchH;
