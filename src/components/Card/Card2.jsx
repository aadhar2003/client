import React from "react";
import "./Card2.css";
// import { Link } from "react-router-dom";

function Card2(props) {
  return (
    <>
        <div className="card-2">
          <div className="card_image">
            <img src= {props.imageUrl} alt="photo of the recipe" />
            {console.log( "y  "  + props.imageUrl)}
          </div>

          <div className="header_container">
            <div className="card_header">{props.title}</div>
          </div>
          <div className="subtext_container">
          
          <div className="card_subtext"> {props.reqtime} minutes</div>
          <div className="card_subtext">{props.ingredients} ingredients</div>
          </div>

          <div className="card_rv">
            {/* <div className="card_link">
            <Link to="#">view recipe</Link>
            <a href=""> view recipe</a>
            </div> */}
          </div>
         
        </div>

    </>
  );
}

export default Card2;
