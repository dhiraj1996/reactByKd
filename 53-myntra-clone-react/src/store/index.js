import {configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";


const myntraStore = configureStore({
    reducer: {
        items: {name: itemsSlice.reducer}
    }
    
})


export default myntraStore;