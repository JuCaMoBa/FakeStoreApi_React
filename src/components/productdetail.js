import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/productdetail.css";

const BASE_URL = "https://fakestoreapi.com/products";

export default function Prodductdetail() {
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
      <div className="containerdetail">
        <img className="imagedetail" src={detail.image} alt={detail.id} />
        <h5 className="titledetail">{detail.title}</h5>
        <h6 className="descriptiondetail">Description: {detail.description}</h6>
        <h6 className="pricedetail">Price: ${detail.price}</h6>
        <h6 className="categorydetail">Category: {detail.category}</h6>
        <h6 className="ratedetail">Rate: {detail?.rating?.rate}</h6>
        <h6 className="countdetail">Count: {detail?.rating?.count}</h6>
      </div>
    </>
  );
}
