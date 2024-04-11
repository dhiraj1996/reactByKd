import "./App.css";
import { TodoItemsContext } from "./store/todo-item-store";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItemMap from "./components/TodoItemMap";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  {
    /* this is the useState for */
  }
  const [addTodo, setAddTodo] = useState([]);

  const addNewItem = (newItems, newDueDate) => {
    setAddTodo((currVal) => [...currVal, { name: newItems, dueDate:newDueDate }]);
  };

  const deleteItem = (item) => {
    const deletedTodo = addTodo.filter((todo) => todo.name !== item);
    setAddTodo(deletedTodo);
  };

  // const defaultTodoItems = [{name: "buy ghee", date: "22-45-3"}]

  return (
    <>
      <TodoItemsContext.Provider value={{
        addTodo: addTodo,
        addNewItem: addNewItem,
        deleteItem}}>
        {/* TODO Ui from here */}
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage/>
          <TodoItemMap></TodoItemMap>
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
