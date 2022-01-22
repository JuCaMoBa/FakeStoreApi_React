import React, { useState } from "react";
import { Link } from "react-router-dom";
import Countdowntimer from "./countdowntimer";

export default function Linkdetail({ id }) {
  const [isactive, setIsactive] = useState(false);

  const blocked = () => {
    setIsactive(true);
  };

  function butonStyle() {
    const buttonCard1 = {
      backgroundColor: "#2b70fc",
      borderRadius: "10px",
      color: "white",
      fontSize: "larger",
      textDecoration: "none",
      float: "right",
      marginRight: "20px",
      width: "120px",
      textAlignLast: "center",
    };

    const buttonCard2 = {
      backgroundColor: "#a5a9af",
      borderRadius: "10px",
      color: "white",
      fontSize: "larger",
      textDecoration: "none",
      float: "right",
      marginRight: "20px",
      width: "120px",
      textAlignLast: "center",
    };
    if (!isactive) {
      return buttonCard1;
    } else {
      return buttonCard2;
    }
  }

  return (
    <div className="containerlinkdetail">
      <Link style={butonStyle()} to={isactive ? "#" : `/productdetail/${id}`}>
        Go to Detail
      </Link>
      <Countdowntimer blocked={blocked} />
    </div>
  );
}
