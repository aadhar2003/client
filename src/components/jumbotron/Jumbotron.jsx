import React from "react";
import './Jumbotron.css'
const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron background">
        <h1 className="display-4 text-center">Hello, world!</h1>
        <p className="lead text-center">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        
        <p className="text-center">
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Jumbotron;
