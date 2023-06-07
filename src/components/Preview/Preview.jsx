import React from "react";
import { useLocation } from "react-router-dom";
import "./Preview.css";
import Card2 from "../Card/Card2";

const Preview = (props) => {
  const data = useLocation().state;

  return (
    <div className="Preview">
        
      <div className="Prev-left">
      <div className="p-head">
        <p>Card Preview</p>
        </div>
        
        <Card2
          title={data.title}
          imageUrl={data.imageUrl}
          reqtime={data.timereq}
          ingredients={data.ingredients}
          className='Card'
        />
        
      </div>

      <div className="Prev-right">
        <div className="p-head">
          <p>Recipie Preview</p>
        </div>
        <div className="info">
          <p>Title : {data.title}</p>
          <p>Ingredients Used: {data.procedure}</p>
          <p>Procedure : {data.description}</p>
        </div>
        {/* <div className="p-head user">
        <p>Posted By-</p>
        </div> */}

      </div>
    </div>
    
  );
};

export default Preview;
