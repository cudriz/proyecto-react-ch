import React from "react";
import Navbar from "../Components/Navbar/Navbar";
// import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemCount from "./ItemCount/ItemCount";
const App = () => {
  return (
    <>
      <Navbar />
      <ItemCount ValInicial={1} stock={17}/>
      {/* <ItemListContainer greeting={"klk"}/> */}
    </>
  );
};

export default App;
