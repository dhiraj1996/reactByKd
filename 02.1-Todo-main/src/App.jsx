import "./App.css";
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItemMap from "./components/TodoItemMap";

// Only todo UI, 
// Hard coded datas are given functionality are not working in this project.

function App() {
  const todoList = [{
    name : "buy milk",
    dueDate : "21/01/96"
    },
    {
      name: "Go to college",
      dueDate: "03/03/24"
    },
    {
      name: "Study",
      
    }
  ]
  return (
    <>
      {/* TODO Ui from here */}
      <center className="todo-container">

        <AppName/>
        <AddTodo/>
        <TodoItemMap todoData={todoList}></TodoItemMap>
      </center>
    </>  
  )
}

export default App
