import React from "react";
import "./Nav.css";
import title from "./title.png";
const Nav = () => {
  return (
    <div className="Nav">
      <div className="left">
        <img src={title} alt="Uncooked" />
      </div>
      <div className="right">
        <div className="navitem review">Review</div>
        <div className="navitem chat">ChatGPT</div>
        <div className="navitem write">Write</div>
        <div className="navitem login">Login</div>
      </div>
    </div>
  );
};

export default Nav;
