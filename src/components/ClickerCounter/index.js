import { useState } from 'react';

function ClickerCounter () {
  const [count, setCount] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const clickerHendler = () => setCount(count => count + 1);

  const mouseMoveHendler = e => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      style={{ height: '100vh' }}
      onClick={clickerHendler}
      onMouseMove={mouseMoveHendler}
    >
      {count}
    </div>
  );
}

export default ClickerCounter;
