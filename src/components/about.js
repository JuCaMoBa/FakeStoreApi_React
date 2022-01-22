import React from "react";
import image from "../images/imagen.jpeg";
import "../styles/about.css";

export default function about() {
  return (
    <div className="container">
      <div className="containerabout">
        <h5>Name: Juan C. Moreno </h5>
        <h5>Description: Fake Sotre API with React </h5>
        <img className="imagen" src={image} alt="myimage" />
        <ul>
          <p>Aprendi</p>
          <li> Hooks(useParams, useState)</li>
          <li> React Router </li>
          <li>Fetch</li>
        </ul>
        <h5>email: juan.moreno.banda@gmail.com</h5>
        <a href="https://github.com/JuCaMoBa">Visit my Github Profile</a>
      </div>
    </div>
  );
}
