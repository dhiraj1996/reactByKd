import "./App.css";
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem1 from "./components/TodoItem1"
import TodoItem2 from "./components/TodoItem2"

import Clockhead from "./components/Clockhead";
import Clockslogan from "./components/Clockslogan";
import Clockdisplay from "./components/Clockdisplay";


function App() {
  

  return (
    <>
      {/* TODO Ui from here */}
      <center className="todo-container">

        <AppName/>
        <AddTodo/>  
        <TodoItem1/>
        <TodoItem2/>
        
      {/* Bharat Clock from here */}
      <Clockhead/>
      <Clockslogan/>
      <Clockdisplay/>

      
      </center>
    </>  
  )
}

export default App
