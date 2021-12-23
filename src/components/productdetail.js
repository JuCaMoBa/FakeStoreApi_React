import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/productdetail.css";

const BASE_URL = "https://fakestoreapi.com/products";

const Productdetail = () => {
  const [detail, setDetail] = useState([]);
  let { Slug } = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/${Slug}`)
      .then((response) => response.json())
      .then((data) => setDetail(data));
  }, [Slug]);

  console.log(Slug);

  return (
    <>
      <div className="container">
        <img className="image" src={detail.image} alt={detail.id} />
        <h5 className="title">{detail.title}</h5>
        <h6 className="description">Description: {detail.description}</h6>
        <h6 className="price">Price: ${detail.price}</h6>
        <h6 className="category">Category: {detail.category}</h6>
        <h6 className="rate">Rate: {detail?.rating?.rate}</h6>
        <h6 className="count">Count: {detail?.rating?.count}</h6>
      </div>
    </>
  );
};
export default Productdetail;
