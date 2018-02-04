import { createStore } from 'redux';

// Action generators - functions that return action objects
// Goal: very simple, takes input in, returns action

const incrementCount = ({ incrementBy = 1 } = {}) => ({
   type: 'INCREMENT',
   incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
//1. Reducers are pure functions
//2. Never change state or action

// This is not a pure function, the output does not depend on the input, 
//also on the global variable a, that could change. If it changing a variable 
//outside of the scope it is not pure either.
let a = 10;
const add = (b) => {
    return a + b;
}


const countReducer = ((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Actions - than an object that gets sent to the store
//I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
