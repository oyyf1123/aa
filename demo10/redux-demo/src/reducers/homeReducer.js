import { MOVIELIST } from '../actions/actionType';

const initState = {
  data:null
}


const homeReducer = (state = initState,action) => {
  const newState = {
    ...state
  }

  switch (action.type) {
    case MOVIELIST:
      newState.data = action.payload;
      break;
  
    default:
      break;
  }

  return newState;
}

export default homeReducer;