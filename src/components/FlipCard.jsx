import React from "react";
import "./css/FlipCard.css";

export default function FlipCard() {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">Frontal</div>
        <div className="card-back">Trasero</div>
      </div>
    </div>
  );
}