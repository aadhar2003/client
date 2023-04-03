import React from "react";
import './Jumbotron.css'
const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron background">
        <h1 className="display-4 text-center my-5">Don't Know What to Eat?</h1>
        <p className="lead text-center">
          Get Delicious Recipies in a minute
        </p>
        <button className="margin-button">Let's Cook!</button>

        
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Jumbotron;
