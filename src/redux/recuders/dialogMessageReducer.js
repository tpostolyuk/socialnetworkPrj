import { GET_MESSAGES } from '../actions/types';

const initState = {
  messages: []
};

const messageReducer = (state = initState, action) => {
  switch(action.type) {
    case GET_MESSAGES: 
      return {
        ...state,
        messages: action.payload
      }
    default: return state;
  }
  
}

export default messageReducer;