import React from "react";
import cook from "./img/cook.png";
import "./Post.css";
import { useState,useContext } from "react";
import cardContext from "../../context/cards/CardContext";

const Post = () => {
  const context = useContext(cardContext);
const {preview,fsubmit}=context;
  const host = "http://localhost:3001/api/blog/addpost";
  const [allValues, setAllValues] = useState({
    title: "",
    ingredients: "",
    description: "",
    vegetarian: "",
    imageURL: "",
    procedure: ""
  });
  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };
  const submitHandler=async(e)=>{
    e.preventDefault();
    console.log('data submitted');
    await fsubmit(allValues);

  }
  return (
    <div className="Post">
      {/* <svg
      id="big-circle"
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="75" cy="75" r="75" fill="#93BA8F" fill-opacity="0.29" />
      </svg> */}

      <div className="P-Header">
        <h2>Post Your Recipies</h2>
        {/* <svg
        id="small-circle"
        width="49"
        height="49"
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24.5"
          cy="24.5"
          r="24.5"
          fill="#C0E3BD"
          fill-opacity="0.66"
        />
      </svg> */}
      </div>
      <div className="Post-form">
        <div className="Post-img">
          <img src={cook} alt="" />
        </div>
        <div className="Post-text">
          <p>Recipe Details</p>
          <form  onSubmit={submitHandler}>
            <input
              type="text"
              name="title"
              value={allValues.title}
              placeholder="Enter name of the dish"
              onChange={changeHandler}
            />
            <input
              type="number"
              name="ingredients"
              value={allValues.ingredients}
              placeholder="No. of ingredients"
              onChange={changeHandler}
            />
            <input
              type="text"
              placeholder="Enter ingredients"
              value={allValues.procedure}
              name="procedure"
              onChange={changeHandler}
            />
            <input
              type="text"
              name="description"
              placeholder="Enter directions for the recipe"
              value={allValues.description}
              id="Post-Des"
              onChange={changeHandler}
            />
            <input
              type="text"
              name="vegetarian"
              value={allValues.vegetarian}
              placeholder="Vegetarian or not?"
              onChange={changeHandler}
            />
            <input
              type="text"
              name="imageURL"
              value={allValues.imageURL}
              placeholder="Upload picture of dish"
              onChange={changeHandler}
            />
            <button type="submit" id="Pt-button">
            Preview Post
          </button>
          </form>
          
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Post;
