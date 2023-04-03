import React from "react";
import Jumbotron from "../jumbotron/Jumbotron";
import Choice from "../Choice/Choice";
import Trending from "../Trending/Trending";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";


function Home() {
  return (
    <>
    <div>
    <Jumbotron />
      <Trending/>
      <Choice />
      <Newsletter/>
      {/* <Footer/> */}

    </div>
     
    </>
  );
}

export default Home;
