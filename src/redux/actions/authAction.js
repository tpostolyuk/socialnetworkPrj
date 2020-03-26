import { SET_USER_DATA } from './types';
import { authAPI } from '../../api/api';

export const setAuthUserData = (userId, email, login) => {
  return {
    type: SET_USER_DATA,
    data: {userId, email, login}
  }
}

export const getAuthUserData = () => dispatch => {
  authAPI.getUserData()
  .then(response => {
    if(response.data.resultCode === 0) {
      let {id, email, login} = response.data.data;
      dispatch(setAuthUserData(id, email,login));
    }
  });
}

export const logIn = payload => dispatch => {
  authAPI.login(payload.email, payload.password, payload.rememberMe)
  .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.userId, payload.email));
      }
    })
    .catch(e => console.log(e.message));
}

export const logOut = () => dispatch => {
  authAPI.logout()
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
}
