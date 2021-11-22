// import plugin
import React from "react";

// import component
import { Start, Portfolio, History } from "components/templates/sections/index.sections";

// create component
const Home = () => {
  return (
    <>
      <Start />
      <Portfolio />
      <History />
    </>
  );
};

export default Home;
