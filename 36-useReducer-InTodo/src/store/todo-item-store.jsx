import { createContext } from "react";

export const TodoItemsContext = createContext({
    items: [],
    addItem: ()=> {},
    deleteItem:()=>{},
    });