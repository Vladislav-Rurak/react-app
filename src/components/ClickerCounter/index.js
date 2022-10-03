import { useEffect, useState } from 'react';

function ClickerCounter () {
  const [count, setCount] = useState(0);

  const clickerHendler = () => setCount(count => count + 1);

  useEffect(() => {
    document.title = `${count}`;
  });

  useEffect(() => {
    document.body.addEventListener('click', clickerHendler);
    return () => {
      document.body.removeEventListener('click', clickerHendler);
    };
  });

  useEffect(() => {
    console.log('useEffect', count);
    return () => {
      console.log('useEffect reset', count);
    };
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <p>{console.log('render')}</p>
      <p>Count: {count}</p>
    </div>
  );
}

// useEffect(() => {
//   // Побочный эффект после каждого рендера (cdm +cdu)
//   return () => {
//     // Сброс побочного эффекта перед следующим рендером
//     // + перед размонтированием
//   };
// });

export default ClickerCounter;
