import { useState, useEffect } from 'react';
import styles from './Counter.module.css';

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [totalClicks, settotalClicks] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(prevState => prevState + 1);
  };
  const handleCounterBIncrement = () => {
    setCounterB(prevState => prevState + 1);
  };

  useEffect(() => {
    const nweTotalClicks = counterA + counterB;
    settotalClicks(nweTotalClicks);
    console.log('Запускается useEffect ' + Date.now());
  }, [counterA, counterB]);

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Кликнули counterA {counterA} раз
      </button>
      <h2>`Всего кликнули {totalClicks} раз`</h2>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Кликнули counterB {counterB} раз
      </button>
    </>
  );
}
