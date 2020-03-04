import { SET_CURRENT_PAGE } from '../actions/types';

const initState = {
  users: [],
  pageSize: 5,
  totalCount: 20,
  currentPage: 2
}

const userReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state, 
        currentPage: action.payload
      }
    default: return state;
  }
}
export default userReducer;
