import React, { useState } from "react";
import { Link } from "react-router-dom";
import Countdowntimer from "./countdowntimer";

export default function Linkdetail({ ...card }) {
  const [isactive, setIsactive] = useState(false);

  const blocked = () => {
    setIsactive(true);
  };

  return (
    <div>
      <Link
        className="buttoncard"
        to={isactive ? "#" : `/productdetail/${card.id}`}
      >
        Go to Detail
      </Link>
      <Countdowntimer blocked={blocked} />
    </div>
  );
}
