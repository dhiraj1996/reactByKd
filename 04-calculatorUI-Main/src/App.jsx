import { useState } from "react";
import "./App.css"
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [inputVal, setInputVal] = useState("");

  const handleButton = (buttonText) => {
    // console.log(buttonText);
    if(buttonText == "C"){
      setInputVal("");
    }else if(buttonText === "="){
      const result = eval(inputVal);
      setInputVal(result);
    }else {
      const value = inputVal + buttonText;
      setInputVal(value);
    }
  }
  return (
    <>
      <div className="container-body">
        <div className="calculator-container text-center border border-black">
          <Display displayVal = {inputVal}></Display>
          <Buttons handleButton={handleButton}></Buttons>
        </div>
      </div>
    </>
  );
}

export default App
