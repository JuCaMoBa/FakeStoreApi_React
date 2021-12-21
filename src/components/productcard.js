import React, { useState, useEffect } from "react";

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
          <div className="items">
            <p>{card.title}</p>
            <img className="items_img" src={card.image} alt={card.id} />
          </div>
        );
      })}
    </>
  );
};

export default Productcard;
