import React from "react";
import "./About.css";
import food from "./food_landing.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="About">
      <div className="text">
        <div className="maintext">
          Find delicious recipes
          <br />
          for the ingredients <br />
          you have on hand!
        </div>
        <div className="smalltext">
          No need to head to the store - simply enter what you've got and <br/>we'll
          suggest tasty meals you can make with what you've got.
        </div>
        <div className="button">
        <Link to="/gpt">
            <button type="submit" id="About-button"> 
           Start Cooking Now!
            </button>
            </Link>
        </div>
      </div>

      <div className="img">
        <img src={food} alt="" />
      </div>
    </div>
  );
};

export default About;
