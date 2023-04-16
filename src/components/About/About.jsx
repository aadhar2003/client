import React from "react";
import "./About.css";
import food from "./food_landing.png";

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
            <button type="submit">Start cooking now !</button>
        </div>
      </div>

      <div className="img">
        <img src={food} alt="" />
      </div>
    </div>
  );
};

export default About;
