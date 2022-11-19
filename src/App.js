import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer greeting={"Encontra todo lo que buscas para tu PC gamer!"}/>
    </div>
  );
}

export default App;
