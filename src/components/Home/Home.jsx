import React from 'react'
import About from '../About/About'
import Trendingsection from '../Trending/Trendingsection'
import FindRecipies from '../FindRecipies/FindRecipies'
import Hpost from '../HPost/Hpost'

function Home() {
  return (
    <>
       <About/>
      <Trendingsection/>
      <FindRecipies/>
      <Hpost/>
    </>
  )
}

export default Home