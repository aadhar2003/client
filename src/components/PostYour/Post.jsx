import React from "react";
import cook from "./img/cook.png";
import "./Post.css";

const Post = () => {
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
        <svg
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
      </svg>
      </div>
      <div className="Post-form">
        <div className="Post-img">
          <img src={cook} alt="" />
        </div>
        <div className="Post-text">
          <p>Recipe Details</p>
          <form action="" method="post">
            <input
              type="text"
              name="title"
              placeholder="Enter name of the dish"
            />
            <input
              type="number"
              name="ingredients"
              placeholder="No. of ingredients"
            />
            <input type="text" placeholder="Enter ingredients" />
            <input
              type="text"
              name="description"
              placeholder="enter directions for the recipe"
            />
            <input
              type="text"
              name="vegetarian"
              placeholder="Vegetarian or not?"
            />
            <input
              type="text"
              name="imageURL"
              placeholder="Upload picture of dish"
            />
          </form>
          <button id="Hp-btn">Preview Post</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
