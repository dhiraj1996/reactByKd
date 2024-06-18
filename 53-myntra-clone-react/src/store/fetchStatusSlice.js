import { createSlice} from "@reduxjs/toolkit"

const fetchStatusSlice = createSlice({
    name: "fetchStatus",
    initialState: {
        fetchDone: false,
        currentlyFetching: false,
    },
    reducers: {
        markFetchDone: (state) =>{
            // return state.fetchDone = true;
            state.fetchDone = true;

            // let stateTwo = !state.fetchDone;
            // return stateTwo;
        },
        markFetchingStarted: (state) => {
            // return state.curentlyFetching = true;
            state.currentlyFetching = true;
        },
        markFetchingFinished: (state) => {
            // return state.curentlyFetching = false;
            state.currentlyFetching = false;
        }
    }
})

export const fetchStatusActions = fetchStatusSlice.actions;


export default fetchStatusSlice;