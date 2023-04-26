import React, { useContext, useState } from "react";
import "./gptPage.css";
import gptlogo from "./ChatgptLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import cardContext from "../../context/cards/CardContext";
import { TailSpin } from "react-loader-spinner";

function GptPage() {
  const context = useContext(cardContext);

  const { callgpt, gptResponse } = context;
  const [inputValue, setInputValue] = useState("");

  const [loading, setloading] = useState(false);
  const [tempvis, settempvis] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (event) => {

    settempvis(false);
    event.preventDefault();
    console.log(`Submitting value: ${inputValue}`);

    setloading(true);
    // Add your logic here for what to do with the submitted value
    await callgpt(inputValue);

    console.log("call complete ");
    setloading(false);

  };

  const handleClick = (event) => {};

  return (
    <>
      <div className={ tempvis === false && 'temp-section' }>
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
              recipe generator will suggest the best recipes for you to cook.
              Say goodbye to wasted ingredients and hello to delicious meals
              made with what you have.
            </p>
          </div>
        </div>
      </div>
      <div className="cont">
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

      <div className={ tempvis === false && 'temp-section' }>
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
              I have sweet potatoes, black beans, and salsa. What should I cook
              for lunch?
            </button>
          </div>
          <div className="prompt">
            <button onClick={handleClick}>
              I have ground beef, bell peppers, and rice. What recipe can I make
              for a filling meal?
            </button>
          </div>
          <div className="prompt">
            <button onClick={handleClick}>
              I have chicken breasts, broccoli, and quinoa. What can I make for
              dinner?
            </button>
          </div>
        </div>
      </div>

      {loading && (
       

        <div className="cont parent">
          <div className="loader">
            <TailSpin
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              />
          </div>
        </div>
      )}


  {!loading && (
     <div className={ tempvis === true && 'temp-section' }>
        <div className="cont instr-container reverse-temp">
            <div className="instructions">
            <p>{gptResponse.message}</p>
            </div>
        </div>
        </div>
      )}

      <hr className="ending_line" />
    </>
  );
}

export default GptPage;
