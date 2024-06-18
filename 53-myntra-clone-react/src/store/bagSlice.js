import { createSlice } from "@reduxjs/toolkit";


const bagSlice = createSlice({
    name: "bag",
    initialState: [],
    reducers: {
        addToBag: (state, action) => {
            state.push(action.payload); 
            //Agar state ko modify kar rahe ho to return ki jarurat nahi hoti
        },
        removeFromBag: (state,action) => {
            return state.filter((itemId) => itemId !== action.payload);
            //agar state ko mofify nahi kar rahe ho to return karna padega.
        }
    }
})


export const bagActions = bagSlice.actions;

export default bagSlice;