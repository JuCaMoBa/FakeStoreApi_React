import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

export default function Nav() {
  return (
    <div className="nav">
      <Link className="active alink" to="/">
        Product Card
      </Link>
      <Link className="alink" to="/about">
        About
      </Link>
    </div>
  );
}
