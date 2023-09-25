import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }, 1000);
    }
    //cleanup function
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const stopClock = () => {
    setMinutes(0);
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="App">
      <div>
        <label>Minutes</label>
        <input
          type="number"
          onChange={(e) => setMinutes(Number(e.target.value))}
        />
        <label>Seconds</label>
        <input
          type="number"
          onChange={(e) => setSeconds(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={() => setIsActive(true)}>Start</button>
        <button onClick={() => setIsActive(!isActive)}>pause/resume</button>
        <button onClick={stopClock}>reset</button>
      </div>
      <h1>
        {minutes}:{seconds}
      </h1>
    </div>
  );
}
