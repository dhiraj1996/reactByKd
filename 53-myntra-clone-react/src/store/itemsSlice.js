import { createSlice} from "@reduxjs/toolkit"
import INITIAL_ITEMS from "../data/items"

const itemsSlice = createSlice({
    name: "items",
    initialState: INITIAL_ITEMS,
    reducers: {
        addInitialItems: (store, action)=>{
            return store;
        }
    }
})

export const itemsAction = itemsSlice.actions;


export default itemsSlice;