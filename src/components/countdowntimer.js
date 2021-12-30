import React, { useState, useEffect } from "react";

function Countdowntimer({ blocked }) {
  const random = () => {
    let id = Math.floor(Math.random() * 2);
    if (id === 0) {
      return { minutes: 1, seconds: 0 };
    } else {
      return { minutes: 3, seconds: 0 };
    }
  };

  const minSec = random();

  const { minutes = 0, seconds = 60 } = minSec;

  const [[mins, secs], setTime] = useState([minutes, seconds]);

  const timer = () => {
    if (mins === 0 && secs === 0) {
      setTime([0, 0]);
      blocked();
      return;
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => timer(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <strong>
        {`${mins.toString().padStart(2, 0)}: ${secs.toString().padStart(2, 0)}`}
      </strong>
    </div>
  );
}

export default Countdowntimer;
