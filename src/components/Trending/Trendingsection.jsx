import React from "react";
import RecipeCard from "../Card/RecipeCard";
import "./Trendingsection.css";

function Trendingsection() {
  const blueberry_pancakes =
    "data:image/jpeg;base64,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";
  const tandoori_chicken =
    "https://therecipecritic.com/wp-content/uploads/2020/02/tandoorichicken-500x375.jpg";

  const masala_dosa =
    "https://media-cdn2.greatbritishchefs.com/media/cqfbszpf/pali-hill0064-selects.jpg";
  return (
    <>
      <div className="first-half">
        <svg
          width="312"
          height="5"
          viewBox="0 0 312 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4H311.5" stroke="white" stroke-width="7" />
        </svg>

        <p id="ht">Trending recipes</p>
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
      <div className="second-half">
      
      </div>
      

      <div className="contain">
        <RecipeCard
          title="Pancakes with blueberries"
          imageUrl={blueberry_pancakes}
          reqtime="30"
          ingredients="10"
        />
        <RecipeCard
          title="Tandoori chicken"
          imageUrl={tandoori_chicken}
          reqtime="45"
          ingredients="5"
        />
        <RecipeCard
          title="masala dosa"
          imageUrl={masala_dosa}
          reqtime="20"
          ingredients="4"
        />
      </div>
   
    </>
  );
}

export default Trendingsection;
