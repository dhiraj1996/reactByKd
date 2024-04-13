
import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
    // items: [],
    // addNewItem: ()=> {},
    // deleteItem:()=>{},
    });

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "ADD_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, date: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ( {children} ) => {
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
        <TodoItemsContext.Provider value={{
            addTodo: addTodo,
            addNewItem: addNewItem,
            deleteItem,
            }}>
            {children}
        </TodoItemsContext.Provider>
    )
}



export default TodoItemsContextProvider;