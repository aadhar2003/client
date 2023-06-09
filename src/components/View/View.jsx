
import { useEffect,useContext } from "react"
import React from 'react'
import cardContext from "../../context/cards/CardContext"
import RecipeCard from "../Card/RecipeCard"



const View = () => {

    const context=useContext(cardContext)
    const {cards,setcards,getCards}=context;

    useEffect(() => {
        getCards();
    }, [])
    
  return (
    <div>
        {
            cards.map((card)=>{
                <RecipeCard/>
            })
        }
    </div>
  )
}

export default View;