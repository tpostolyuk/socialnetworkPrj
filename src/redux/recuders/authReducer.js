import { SET_USER_DATA } from '../actions/types';

const initState = {
  userId: 6533,
  email: null,
  login: null,
  isAuth: false,
  isFollow: false
};

export const authReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default: return {...state};
  }
}
