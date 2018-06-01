import { createStore } from 'redux'

const reducer = (state, action) => {
    if (action.type == "INC"){
        state = state + action.payload;
    }

    if (action.type == "DEC"){
        state = state - action.payload;
    }

    return state;
}

const store = createStore(reducer, 0)

store.subscribe(() => {
    console.log('current state', store.getState());
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
