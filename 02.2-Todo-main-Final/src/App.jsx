import "./App.css";
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItemMap from "./components/TodoItemMap";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const todoList = [{
  //   name : "buy milk",
  //   dueDate : "21/01/96"
  //   },
  //   {
  //     name: "Go to college",
  //     dueDate: "03/03/24"
  //   },
  //   {
  //     name: "Study",
      
  //   }
  // ]

  const [addTodo, setAddTodo] = useState([])

  const handleAddButton = (newItems, newDueDate)=> {
    // console.log(`new item is: ${newItems} new date is: ${newDueDate}`)
    let newTodoItems = [...addTodo, 
      {name: newItems, dueDate: newDueDate}];
    setAddTodo(newTodoItems);
  }

  const handleDeleteBtn = (item)=> {
    console.log(`${item} is the item`)
    const deletedTodo = addTodo.filter((todo)=>todo.name !== item);
    setAddTodo(deletedTodo);
  }
  return (
    <>
      {/* TODO Ui from here */}
      <center className="todo-container">

        <AppName/>
        <AddTodo addItems ={handleAddButton}/>
        {addTodo.length === 0 && <WelcomeMessage /> }
        <TodoItemMap todoData={addTodo} handleDelete={handleDeleteBtn}></TodoItemMap>
      </center>
    </>  
  )
}

export default App
