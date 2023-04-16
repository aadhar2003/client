import React from "react";
import cardContext from "./CardContext";
import { useState } from "react";

const CardState = (props) => {
  const host = "http://localhost:3001";

  const InitialCards = [
   
  ];


  const [cards ,setcards] = useState(InitialCards)

  // GEt all cards

  const getCards = async () => {
    // API call
    const response = await fetch(
     `${host}/api/blog/getposts`,
     {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
       },
     }
   );

    const json = await response.json();
    //  console.log(json)
    setcards(json);
 };


  // Add card
  const addCard = async (title, description, procedure, tag, vegetarian) => {
     // API call
     const response = await fetch(
      `${host}/api/blog/addpost`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            localStorage.getItem("token"),
        },

        body: JSON.stringify({title, description, procedure, tag, vegetarian}),
      }
    );


    const card = {
        // TODO : correct user and _id
        // ID AND USER HERE FOR TESTING
      _id: "63a4c599dd6cd2769bd0b956",
      user: "63a065379d237c833dc6f461", // put any user or id here 
      title: title,
      description: description,
      procedure: procedure,
      tag: tag,
      vegetarian: vegetarian,
      __v: 0,
    };

    console.log("adding a new card");
    setcards(cards.concat(card));
  };


// DELETE a card
  const deleteCard = async(id) => {

    // API call
    const response = await fetch(
      `${host}/api/blog/deletepost/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            localStorage.getItem("token"),
        },

      }
    );

    const json = response.json();
    console.log(json);

    const newCards = cards.filter((card) => {
      return card._id !== id;
    });
    setcards(newCards);
  };


// // EDIT a card
  const editCard = async (title, description, procedure, tag, vegetarian) => {
    // API call
    const response = await fetch(
      `${host}api/blog/updatepost/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            localStorage.getItem("token"),
        },

        body: JSON.stringify({title, description, procedure, tag, vegetarian}),
      }
    );

    const jsonRes = response.json();

    // Logic to edit on client
    for (let i = 0; i < cards.length; i++) {
      if (cards[i]._id === id) {
        cards[i].title = title;
        cards[i].description = description;
        cards[i].procedure = procedure;
        cards[i].tag = tag;
        cards[i].vegetarian = vegetarian;
      }
    }
  };

  return (
    <cardContext.Provider
      value={{ cards, getCards , setcards, addCard, deleteCard, editCard }}
    >
      {props.children}
    </cardContext.Provider>
  );
};

export default CardState;