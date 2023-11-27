import React from "react";
import "../styles/card.css";

export default function Card({image, title, description}) {
  return (
    <div className="wrap-card">
      <img src={image} alt="harimau" className="img-item" />
      <div className="desc">
      <h1>{title}</h1>
      <p>
        {description}
      </p>
      </div>
    </div>
  );
}
