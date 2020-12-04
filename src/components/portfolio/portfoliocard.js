import React from "react"
import "./portfoliocard.css";

export const PCard = (props) => {
  return (
    <div class="card">
      <img class="card-img-top" src={props.img} alt="Card image cap"></img>
        <h5 class="card-header">{props.tittle}</h5>
        <div class="card-body">
        <h5 class="card-title">{props.sub}</h5>
        <p class="card-text">{props.content}</p>
        <a href={props.link} target="_blank" class="btn btn-primary">Go GitHub</a>
      </div>
    </div>
  );
};

export default PCard