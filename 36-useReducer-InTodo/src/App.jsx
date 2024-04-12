import "./App.css";
import { TodoItemsContext } from "./store/todo-item-store";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItemMap from "./components/TodoItemMap";
import { useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

const todoItemsReducer = (currTodoItems, action)=> {
  let newTodoItems = currTodoItems;
  if (action.type === "ADD_ITEM") {
    newTodoItems = [...currTodoItems, {name: action.payload.itemName,
    date: action.payload.itemDueDate},
  ];
  }else if(action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter((item)=> item.name !== action.payload.itemName)
  }
  return newTodoItems;
}

function App() {

  const [addTodo, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate)=> {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    }
    dispatchTodoItems(newItemAction);
  }

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      }
    }
    dispatchTodoItems(deleteItemAction);
  }

  return (
    <>
      <TodoItemsContext.Provider value={{
        addTodo: addTodo,
        addNewItem: addNewItem,
        deleteItem,
        }}>
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
