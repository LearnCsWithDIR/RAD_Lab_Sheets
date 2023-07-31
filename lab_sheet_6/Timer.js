import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      {isRunning && <button onClick={handleStop}>Stop</button>}
    </div>
  );
};

export default Timer;
