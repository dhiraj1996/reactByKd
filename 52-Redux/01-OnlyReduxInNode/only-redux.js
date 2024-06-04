const redux = require('redux');

const INITIAL_VALUE ={
    counter: 0
};

//1. Reducer
const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;
    if (action.type === "INCREMENT") {
        newStore = { counter: store.counter + 1 };
    }else if (action.type === "DECREMENT"){
        newStore = {counter: store.counter - 1};
    }else if (action.type === "ADDITION"){
        newStore = {counter: store.counter + action.payload.number}
    }
    return newStore;
}
//2.Store
const store = redux.createStore(reducer);

const subscriber = () => {
    const state = store.getState();
    console.log(state);
}
//3.Subscribe
store.subscribe(subscriber);
//4.Action
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({
    type: 'ADDITION', 
    payload: {
        number: 7,
    }});
store.dispatch({type: 'DECREMENT'});
