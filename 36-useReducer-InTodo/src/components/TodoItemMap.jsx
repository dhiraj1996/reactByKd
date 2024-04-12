import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-item-store";
import { useContext } from "react";

function TodoItemMap() {

  const contextObj = useContext(TodoItemsContext);
  const addTodo = contextObj.addTodo;

  // const {todoData} = useContext(TodoItemsContext);
  // const {deleteItem} = useContext(TodoItemsContext);
  
  return (
    <>
      {addTodo.map((list, index) => (
        <TodoItem
          key={index}
          todoName={list.name}
          todoDate={list.dueDate}
        ></TodoItem>
      ))}
    </>
  );
}

export default TodoItemMap;
