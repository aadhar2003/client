import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div>
        <div>
          <h3>
            Subscribe To Our Newsletter
          </h3>
          <p>Keep Yourself Up to Date with new recipies</p>
          <input type="text" placeholder='Your Name'/>
          <input type="text" placeholder='Your Email'/>
          <button type="submit">Sign Up</button>
        </div>
        <hr className="my-4" />
    </div>
  )
}

export default Newsletter
