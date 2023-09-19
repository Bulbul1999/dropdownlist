import React from "react";
import Dropdown from "./Dropdown";
import "./index.css";
import { useState } from "react";

function App() {
const [selected,setSelected] = useState("");
  return (
    <div className="App">

      {/*Render Dropdown component */}
      <Dropdown selected={selected} setSelected = {setSelected}/>
      
    </div>
  );
}

export default App;