import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const WelcomeMessage = () => {

    const contextObj = useContext(TodoItemsContext);
    const addTodo = contextObj.addTodo;

    return(
        addTodo.length === 0 && <h6>Have a Productive Day</h6>
    )
}

export default WelcomeMessage;