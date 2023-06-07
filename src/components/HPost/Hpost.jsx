import React from "react";
import cook from "./img/cook.png";
import "./Hpost.css";
import { Link } from "react-router-dom";

const Hpost = () => {
  return (
    <div className="Hpost">
      <div className="Hp-header">
        <svg
          width="312"
          height="5"
          viewBox="0 0 312 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4H311.5" stroke="white" stroke-width="7" />
        </svg>
        <p>Post Your Recipe</p>
        <svg
          width="312"
          height="5"
          viewBox="0 0 312 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4H311.5" stroke="white" stroke-width="7" />
        </svg>
      </div>

      <div className="Hp-content">
        <div className="Hp-img">
          <img src={cook} alt="" />
        </div>
        <div className="Hp-text">
          <p>
            Post your recipes, view others',<br/>and connect with fellow food<br/>
            enthusiasts. Join our community<br/>today and explore the world of<br/>
            culinary delights.
          </p>
          <Link id="Hp-btn" to='/post'>Post Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Hpost;
