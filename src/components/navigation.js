import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/"> Product Card </Link>
      <Link to="/about"> About</Link>
    </nav>
  );
}
