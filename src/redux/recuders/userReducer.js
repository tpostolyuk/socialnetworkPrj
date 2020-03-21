import { SET_CURRENT_PAGE, TOGGLE_ISFETCHING, SET_USER_PROFILE } from '../actions/types';

const initState = {
  users: [],
  pageSize: 5,
  totalCount: 20,
  currentPage: 1,
  profile: null,
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    default: return state;
  }
}
export default userReducer;
