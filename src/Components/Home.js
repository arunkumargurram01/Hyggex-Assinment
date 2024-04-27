import React from "react";
import NavBar from "./NavBar";
import Body from "./Body";
import Card from "./Card";
import Faq from "./Faq";

const Home = () => {
  return (
    <>
      <NavBar/>
        <Body />

      <Card />
      <Faq/>
      <br></br><br></br>
      <br></br><br></br>
    </>
  );
};

export default Home;
