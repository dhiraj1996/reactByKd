import "./App.css";

import Clockhead from "./components/Clockhead";
import Clockslogan from "./components/Clockslogan";
import Clockdisplay from "./components/Clockdisplay";


function App() {
  

  return (
    <>
      {/* TODO Ui from here */}
      <center className="todo-container"> 
      {/* Bharat Clock from here */}
      <Clockhead/>
      <Clockslogan/>
      <Clockdisplay/>
      </center>
    </>  
  )
}

export default App
