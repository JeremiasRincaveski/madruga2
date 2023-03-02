import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Spending } from "./Components/Spending/Spending";
import { Balance } from "./Components/Balance/Balance";

function App() {
  return (
    <>
      {/* <Spending /> */}
      <Balance />
    </>
    
  )
}

export default App;
