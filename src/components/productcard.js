import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Countdowntimer from "./countdowntimer";

import "../styles/productcard.css";

const BASE_URL = "https://fakestoreapi.com/products";

export default function Productcard() {
  const [cards, setCards] = useState([]);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  const blockButton = () => {
    setBlocked(true);
  };

  return (
    <>
      <h1 className="headercard">Products</h1>
      {cards.map(function (card) {
        return (
          <div key={card.id} className="containercard">
            <img className="imagecard" src={card.image} alt={card.id} />
            <h5 className="titlecard">{card.title}</h5>
            <Link
              className="buttoncard"
              to={blocked ? "#" : `/productdetail/${card.id}`}
            >
              Go to Detail
            </Link>
            <Countdowntimer blockButton={blockButton} />
          </div>
        );
      })}
    </>
  );
}
