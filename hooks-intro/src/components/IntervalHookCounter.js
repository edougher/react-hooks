import React, { useState, useEffect } from "react";

function IntervalHookCounter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tick = () => {
      setCount(count + 1);
    };

    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <div>
      {count}
      <button onClick={() => clearInterval}>Stop</button>
    </div>
  );
}

export default IntervalHookCounter;
