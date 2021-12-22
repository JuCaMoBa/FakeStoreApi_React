import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/productcard.css";
const BASE_URL = "https://fakestoreapi.com/products";

const Productcard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      {cards.map(function (card) {
        return (
          <div key={card.id} className="container">
            <img className="image" src={card.image} alt={card.id} />
            <h5 className="title">{card.title}</h5>
            <Link className="button" to="/productdetail">
              {" "}
              Go to Detail
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Productcard;
