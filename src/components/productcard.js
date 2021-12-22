import React, { useState, useEffect } from "react";
import "../styles/productcard.css";
import "../styles/normalizce.css";
const BASE_URL = "https://fakestoreapi.com/products";

const Productcard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <>
      {cards.map(function (card) {
        return (
          <div className="container">
            <img className="image" src={card.image} alt={card.id} />
            <h5 className="title">{card.title}</h5>
          </div>
        );
      })}
    </>
  );
};

export default Productcard;
