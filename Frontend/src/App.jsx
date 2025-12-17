import React from "react";
import Recepies from "./components/Recepies";
import Header from "./components/Partials/Header";
import Article from "./components/article";

const App = () => {
  return (
    <div>
      <Header />
      <Recepies />
      <Article />
    </div>
  );
};

export default App;
