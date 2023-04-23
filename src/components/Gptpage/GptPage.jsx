import React from "react";
import "./gptPage.css";
import gptlogo from "./ChatgptLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function GptPage() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting value: ${inputValue}`);

    // Add your logic here for what to do with the submitted value
    setInputValue("");
  };

  const handleClick = (event) => {

  };

  return (
    <>
      <div className="top-section">
        <div className="top-img">
          <img src={gptlogo} alt="chatgptlogo" />
        </div>
        <h1>
          Find Recipes With{" "}
          <span style={{ color: "rgba(76, 152, 88, 1)" }}>ChatGPT</span>
        </h1>
      </div>
      <div className="cont">
        <div className="instruction">
          <p>
            Discover the perfect recipe based on the ingredients you have at
            home! Simply <b>enter the ingredients</b>you have on hand and our
            recipe generator will suggest the best recipes for you to cook. Say
            goodbye to wasted ingredients and hello to delicious meals made with
            what you have.
          </p>
        </div>

        <div className="subheading">
          <h4>Enter Ingredients</h4>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit} className="form-class">
            <input
              type="text"
              value={inputValue}
              className="inputArea"
              onChange={handleInputChange}
            />
            <button type="submit" className="subButton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </div>

      <div className="line-break">
        <svg
          width="686.4"
          height="5"
          viewBox="0 0 686.4 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4H685.9" stroke="#25652B" strokeWidth="3" />
        </svg>

        <p>OR</p>
        <svg
          width="686.4"
          height="5"
          viewBox="0 0 686.4 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4H685.9" stroke="#25652B" strokeWidth="3" />
        </svg>
      </div>
        <div className="center-text">
            <p>Try These Prompts</p>
        </div>

        <div className="prompts-container">
            <div className="prompt">
            <button onClick={handleClick}>
                I have sweet potatoes, black beans, and salsa. What should I cook for lunch?
            </button>
            </div>
            <div className="prompt">
            <button onClick={handleClick}>
            I have ground beef, bell peppers, and rice. What recipe can I make for a filling meal?
            </button>
            </div>
            <div className="prompt">
            <button onClick={handleClick}>
            I have chicken breasts, broccoli, and quinoa. What can I make for dinner?
            </button>
            </div>
        </div>

    </>
  );
}

export default GptPage;
