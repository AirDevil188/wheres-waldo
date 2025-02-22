import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef();

  useEffect(() => {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }, []);

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = now - startTime;
  }

  function timeFormat() {
    let seconds = Math.floor(secondsPassed / 1000) % 60;
    let minutes = Math.floor((secondsPassed / (1000 * 60)) % 60);
    let milliseconds = Math.floor((secondsPassed % 1000) / 10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <section>
      <strong>{timeFormat(secondsPassed)}</strong>
    </section>
  );
};

export default Stopwatch;
