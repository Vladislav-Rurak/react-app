import React, { Component, useState } from 'react';

function CounterH () {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(count => count + step);
  };

  const dicrement = () => {
    setCount(count => count - step);
  };

  return (
    <>
      <div>{count}</div>
      <input
        type='number'
        value={step}
        onChange={e => setStep(Number(e.target.value))}
      />
      <button onClick={increment}>+</button>
      <button onClick={dicrement}>-</button>
    </>
  );
}

export default CounterH;
