import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/productcard.css";

const BASE_URL = "https://fakestoreapi.com/products";

export default function Productcard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <>
      <h1 className="headercard">Products</h1>
      {cards.map(function (card) {
        return (
          <div key={card.id} className="containercard">
            <img className="imagecard" src={card.image} alt={card.id} />
            <h5 className="titlecard">{card.title}</h5>
            <Link className="buttoncard" to={`/productdetail/${card.id}`}>
              Go to Detail
            </Link>
          </div>
        );
      })}
    </>
  );
}
