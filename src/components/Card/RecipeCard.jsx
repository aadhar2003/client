import React from "react";
import "./RecipeCard.css";
import photo1 from "./trending1_photo.png";
// import { Link } from "react-router-dom";

function Recipecard() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card_image">
            <img src={photo1} alt="photo of the recipe" />
          </div>

          <div className="header_container">
            <div className="card_header">Pancake with blueberries</div>
          </div>
          <div className="subtext_container">
          
          <div className="card_subtext"> 30 minutes</div>
          <div className="card_subtext">11 ingredients</div>
          </div>

          <div className="card_rv">
            <div className="card_link">
            {/* <Link to="#">view recipe</Link> */}
            <a href="#"> view recipe</a>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Recipecard;
