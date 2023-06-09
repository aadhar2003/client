import React, { useEffect,useContext } from "react";
import cardContext from "../../context/cards/CardContext";
import { useLocation } from "react-router-dom";
import "./Preview.css";
import Card2 from "../Card/Card2";
import { useNavigate } from "react-router-dom";

const Preview = (props) => {

  const data = useLocation().state;
  const navigate = useNavigate();
  const newline = () => {
    document.getElementById("newline").innerHTML = data.description.replace(/\n/g, "<br />");
  };
  const context = useContext(cardContext);
  const { addCard } = context;
  
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("data submitted");
    // const res = await fsubmit(allValues);

    let vegbool;
    if (data.vegetarian[0] == "f" || data.vegetarian[0].toLowerCase() == 'n') {
      vegbool = false;
    } else {
      vegbool = true;
    }

    await addCard(
      data.title,
      data.description,
      data.procedure,
      "none",
      vegbool,
      Number(data.ingredients),
      Number(data.timereq),
      data.imageURL
    );
    navigate('/');
  };
  useEffect(() => {
    newline();
  });

  return (
    <div className="Preview">
      <div className="Prev-left">
        <div className="p-head">
          <p>Card Preview</p>
        </div>

        <Card2
          title={data.title}
          imageUrl={data.imageURL}
          reqtime={data.timereq}
          ingredients={data.ingredients}
          className="Card"
        />
      </div>

      <div className="Prev-right">
        <div className="p-head">
          <p>Recipie Preview</p>
        </div>
        <div className="info">
          <p>Title : {data.title}</p>
          <p>Ingredients Used: {data.procedure}</p>
          <p>
            Procedure :<span id="newline">{data.description}</span>
          </p>
        </div>
        {/* <div className="p-head user">
        <p>Posted By-</p>
        </div> */}
        <button className="Pt-button submit" onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
};

export default Preview;
