import { GET_NAMES } from '../actions/types';

const initState = {
  names: []
}

export const dialogNameReducer = (state = initState, action) => {
  const { payload } = action;
  switch(action.type) {
  case GET_NAMES:
    return {
      ...state,
      names: payload
    }
  default: return state;
  }
}
