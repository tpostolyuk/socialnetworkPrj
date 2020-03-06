import { SET_CURRENT_PAGE, TOGGLE_ISFETCHING } from '../actions/types';

const initState = {
  users: [],
  pageSize: 5,
  totalCount: 20,
  currentPage: 2,
  isFetching: true
}

const userReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state, 
        currentPage: action.payload
      }
    case TOGGLE_ISFETCHING:
      return {
        ...state,
        isFetching: !state.isFetching
      }
    default: return state;
  }
}
export default userReducer;
