import React from "react";
import "./FindRecipies.css";
import ty from './img/ty.png';
import chef from './img/chef.png';
import eat from './img/eat.png';
import { Link } from "react-router-dom";


const FindRecipies = () => {
  return (
    <div className="cont-2">
      <div className="header">
        <svg
          width="320"
          height="9"
          viewBox="0 0 361 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.5 1.5H360.5" stroke="#25652B" stroke-width="3" />
        </svg>
        <p>Find Recipes With ChatGPT</p>
        <svg
          width="320"
          height="9"
          viewBox="0 0 361 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.5 1.5H360.5" stroke="#25652B" stroke-width="3" />
        </svg>
      </div>
      <div className="cook-instructions">
        <div className="instruct-1">
          <img src={ty} alt=""/>
          <p>Type in the ingredients with<br/> which you want to cook<br/>using our chat gpt feature</p>
          
        </div>
        <div className="instruct-1">
          <img src={chef} alt="" />
          <p id="i-text-2">Collect all your ingredients,<br/>follow the instructions and<br/>start cooking </p>
        </div>
        <div className="instruct-1">
          <img src={eat} alt="" />
          <p id="i-text-3">Enjoy your delicious meal !</p>
        </div>
      </div>
      <Link to="/gpt">
      <button>Start Cooking</button>
      </Link>
    </div>
  );
};

export default FindRecipies;
