import {createStore} from "redux";

const INITIAL_VALUE = {
    counter: 0,
    privacy: false,
}

const counterReducer = (store = INITIAL_VALUE, action) => {
    if(action.type === "INCREMENT"){
        return {counter: store.counter + 1, privacy: store.privacy,}
        /*So when we change one value we have add all the previous value in the return .
        This is how we can add privacy value "old way" */ 
    }else if(action.type === "DECREMENT"){
        return {...store, counter: store.counter - 1}
        /*Through spread operator we can easily add values wahtever there in the store */ 
    }else if(action.type === "ADD"){
        return {...store, counter: store.counter + Number(action.payload.data)}
    }else if(action.type === "SUB"){
        return {...store, counter: store.counter - action.payload.data}
    }else if (action.type === "PRIVACY_TOGGLE"){
        return{...store, privacy: !store.privacy}
    }
    return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;