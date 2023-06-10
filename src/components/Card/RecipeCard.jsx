import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  return (
    <>
        <div className="card">
          <div className="card_image">
            <img src= {props.imageUrl} alt="dish" />
          </div>

          <div className="header_container">
            <div className="card_header">{props.title}</div>
          </div>
          <div className="subtext_container">
          
          <div className="card_subtext"> {props.reqtime} minutes</div>
          <div className="card_subtext">{props.ingredients} ingredients</div>
          </div>

          <div className="card_rv">
            <div className="card_link">
            {/* <Link to="#">view recipe</Link> */}
            <Link to="/Sview" state={props}>view recipe</Link>
            </div>
          </div>
         
        </div>

    </>
  );
}

export default RecipeCard;
