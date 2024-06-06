import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {counterVal: 0},
    reducers:{
        increment: (state)=> {
            state.counterVal ++;
        },

        decrement: (state)=> {
            state.counterVal --;
        },

        add: (state,action)=> {
            state.counterVal += Number(action.payload.data);
        },
        subtract: (state,action)=> {
            state.counterVal -= action.payload;
        }
    }
}
)

export const counterActions = counterSlice.actions;

// export default counterSlice;
//this export is not working 