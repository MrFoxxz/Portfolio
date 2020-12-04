import React from "react"
import "./bubble.css";

export const Bubble = (props) => {
  return (
    <a className="abubble"
    href={props.link} target="_blank">
      <div className="bubble">
      <img className="logo" src={props.logo}></img>
      </div>
    </a>
  );
};

export default Bubble