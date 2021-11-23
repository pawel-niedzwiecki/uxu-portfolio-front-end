// import plugin
import React from "react";

// import component
import { Start, Portfolio, History, Contact } from "components/templates/sections/index.sections";

// create component
const Home = () => {
  return (
    <>
      <Start />
      <Portfolio />
      <History />
      <Contact />
    </>
  );
};

export default Home;
