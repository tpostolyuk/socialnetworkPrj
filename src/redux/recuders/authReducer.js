import { SIGN_UP, SIGN_OUT } from '../actions/types';

const initState = [];

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case SIGN_UP:
      return state;
    case SIGN_OUT:
      return {...state};
    default: 
      return {...state};
  }
}

export default authReducer;
