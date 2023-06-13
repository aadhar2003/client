import { useEffect, useContext } from "react";
import React from "react";
import cardContext from "../../context/cards/CardContext";
import RecipeCard from "../Card/RecipeCard";
// import Card2 from "../Card/Card2";
// import { render } from "react-dom";
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
  const { cards, getCards } = context;

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="flex-container">
      {
        cards.map(e=> {
          return  <div className="view"><RecipeCard
          key={e._id}
          imageUrl={e.imageURL}
          title={e.title}
          reqtime={e.timereq}
          ingredients={e.ingredients}
          procedure={e.procedure}
          description={e.description}
          />
        </div>;
        })
      }
    </div>
  );
};

export default View;
