import "./App.css";
import TodoItemsContextProvider from "./store/todo-item-store";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItemMap from "./components/TodoItemMap";
import WelcomeMessage from "./components/WelcomeMessage";



function App() {
  return (
    <>
      <TodoItemsContextProvider>
        {/* TODO Ui from here */}
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItemMap></TodoItemMap>
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
