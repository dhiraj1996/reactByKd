import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItemMap from "./components/TodoItemMap";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [addTodo, setAddTodo] = useState([]);

  // const handleAddButton = (newItems, newDueDate)=> {
  //   // console.log(`new item is: ${newItems} new date is: ${newDueDate}`)
  //   let newTodoItems = [...addTodo,
  //     {name: newItems, dueDate: newDueDate}];
  //   setAddTodo(newTodoItems);
  // }
  const handleAddButton = (newItems, newDueDate) => {
    setAddTodo((currVal) => [...currVal, { name: newItems, newDueDate }]
    );
  };

  const handleDeleteBtn = (item) => {
    const deletedTodo = addTodo.filter((todo) => todo.name !== item);
    setAddTodo(deletedTodo);
  };

  return (
    <>
      {/* TODO Ui from here */}
      <center className="todo-container">
        <AppName />
        <AddTodo addItems={handleAddButton} />
        {addTodo.length === 0 && <WelcomeMessage />}
        <TodoItemMap
          todoData={addTodo}
          handleDelete={handleDeleteBtn}
        ></TodoItemMap>
      </center>
    </>
  );
}

export default App;
