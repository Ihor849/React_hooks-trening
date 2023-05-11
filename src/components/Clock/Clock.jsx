import { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);
  console.log(intervalId);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Это интервал каждые 2000ms ' + Date.now());
      setTime(new Date());
    }, 2000);
    console.log(time);
    return () => {
      console.log('Это функция очистки перед следующим вызовом useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };
  const start = () => {
    intervalId.current = setInterval(() => {
      console.log('Это интервал каждые 1000ms ' + Date.now());
      setTime(new Date());
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={() => setTime(new Date())}>
        Обновить стейте time
      </button>
      <p className={styles.clockface}>
        Текущее время: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop}>
        Остановить
      </button>
      <button type="button" onClick={start}>
        Запустить
      </button>
    </div>
  );
}
