import React from 'react'
import NonVeg from './nonVeg/NonVeg'
import Veg from './veg/Veg'
import './Choice.css'

const Choice = () => {
  return (
    <div>
        <div className="box">
        <Veg/>
        <NonVeg/> 
        
        </div>
        <hr className="my-4" />
        

    </div>
  )
}

export default Choice