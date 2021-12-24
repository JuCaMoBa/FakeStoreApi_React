import React, { useState, useEffect } from "react";
import TimeContext from "../containers/TimeContext";

function Countdowntimer({ minSec }) {
  const { minutes = 0, seconds = 60 } = minSec;
  const [[mins, secs], setTime] = useState([minutes, seconds]);

  const timer = () => {
    if (mins === 0 && secs === 0) return setTime([0, 0]);
    else if (secs === 0) {
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
    <TimeContext.Provider value={[[mins, secs], setTime]}>
      <div>
        <strong>
          {`${mins.toString().padStart(2, 0)}: ${secs
            .toString()
            .padStart(2, 0)}`}
        </strong>
      </div>
    </TimeContext.Provider>
  );
}

export default Countdowntimer;
