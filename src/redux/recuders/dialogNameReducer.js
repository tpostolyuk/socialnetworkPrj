import { GET_NAMES } from '../constants/types';

const initState = {
  names: []
}

const dialogNameReducer = (state = initState, action) => {
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

export default dialogNameReducer;
