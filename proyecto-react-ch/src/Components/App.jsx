import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"klk"}/>
    </>
  );
};

export default App;
