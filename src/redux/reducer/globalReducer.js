import ActionType from './globalActionType';

const globalState = {
  totalOrder: 0
}

// Reducer
const rootReducer = (state = globalState, action) => {
  switch(action.type){
    case ActionType.PLUS_ORDER:
      return {
        ...state,
        totalOrder: state.totalOrder + 1
      }
    case ActionType.MINUS_ORDER:
      let totOrder = 0;
      if(state.totalOrder > 0){
        totOrder = state.totalOrder - 1
      }

      return {
        ...state,
        totalOrder: totOrder
      }
    default :
      return state; 
  }
  
}

export default rootReducer;