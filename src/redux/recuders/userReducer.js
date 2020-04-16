import { SET_CURRENT_PAGE, TOGGLE_ISFETCHING, SET_USER_PROFILE, FOLLOW_USER, UNFOLLOW_USER, SET_USERS, FOLLOWING_IN_PROGRESS } from '../actions/types';

const initState = {
  users: [],
  pageSize: 5,
  totalCount: 100,
  currentPage: 1,
  profile: null,
  isFetching: false,
  followingInProgress: []
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
        isFetching: action.payload
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      }
    case FOLLOW_USER:
      return {
        ...state, 
        users: state.users.map(user => {
          if(user.id === action.payload) {
            return {...user, followed: true}
          } else return user;
        })
      }
    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.payload) {
            return {...user, followed: false}
          } else return user;
        })
      }
      case FOLLOWING_IN_PROGRESS:
        return {
          ...state,
          followingInProgress: action.isFetching 
            ? [...state.followingInProgress, action.userId] 
            : [...state.followingInProgress.filter(item => item.id === action.userId)]
        }
    default: return state;
  }
}
export default userReducer;
