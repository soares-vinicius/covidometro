import React from "react";
import Header from "../components/header";
import Banner from "../sections/home/banner";
import Cards from "../sections/home/cards";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Cards />
    </>
  );
};

export default Home;
