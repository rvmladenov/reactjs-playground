const redux = require('redux');
const createStore = redux.createStore;

const initState = {
    counter: 0
};
const rootReducer = (state = initState, action) => {
    const newState = { ...state };

    switch(action.type) {
        case 'INC_COUNTER':
            newState.counter++;
        break;

        case 'ADD_COUNTER':
            newState.counter += +action.value;
        break;
    }

    return newState;
};

const store = createStore(rootReducer);
console.log(store.getState());

store.dispatch({ type: 'INC_COUNTER'});
store.dispatch({ type: 'ADD_COUNTER', value: 10});

console.log(store.getState());