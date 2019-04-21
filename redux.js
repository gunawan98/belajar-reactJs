const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  value: 3,
  age: 21,
  adress: 'Surabaya',
  country: 'Indo'
}


// Reducer
const rootReducer = (state= initialState, action) => {
  switch(action.type){
    case 'ADD_AGE':
      return{
        ...state,
        age: state.age + 2,
        adress: 'Malang'
      }
    case 'CHANGE_VALUE':
      return{
        ...state,
        value: state.value + action.newValue
      }
    default:
      return state;
  }
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscribtion
store.subscribe(() => {
  console.log('store change: ',store.getState());
})

// Dispatching Action
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue: 3})

console.log(store.getState());
