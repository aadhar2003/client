import { useEffect, useContext } from "react";
import React from "react";
import cardContext from "../../context/cards/CardContext";
import RecipeCard from "../Card/RecipeCard";
import Card2 from "../Card/Card2";
import { render } from "react-dom";
import './View.css'

const View = () => {
//   const Show = ({ data }) => {
//     return data.map((e) => {
//       <Card2
//         imageUrl={e.imageUrl}
//         title={e.title}
//         reqtime={e.reqtime}
//         ingredients={e.ingredients}
//       />;
//     });
//   };
// const temp=[
//     {
//         _id:'1',
//         title:'askdjhasd',
//     },
//     {
//         _id:'2',
//         title:'sadkjasd'
//     }

// ]
  const context = useContext(cardContext);
  const { cards, setcards, getCards } = context;

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="view">
      {/* <Card2
          imageUrl={cards[0].imageUrl}
          title={cards[0].title}
          reqtime={cards[0].reqtime}
          ingredients={cards[0].ingredients}
        />; */}
      {/* <Show data={cards} /> */}
      {
        cards.map(e=> {
            return<Card2
            key={e._id}
            imageUrl={e.imageUrl}
            title={e.title}
            reqtime={e.reqtime}
            ingredients={e.ingredients}
            procedure={e.procedure}
            description={e.description}
          />;
        })
      }
    </div>
  );
};

export default View;
