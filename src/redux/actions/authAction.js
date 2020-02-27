import { SIGN_UP, SIGN_OUT, IS_USER_SIGN_IN } from './types';
import { auth } from '../../config';

export const signUp = payload => {
  return {
    type: SIGN_UP,
    payload
  }
}

export const signOut = payload => {
  return {
    type: SIGN_OUT,
    payload
  }
}

export const isUserLogIn = payload => {
  return {
    type: IS_USER_SIGN_IN,
    payload
  }
}

export const fetchIsUserLogIn = () => {
  return dispatch => {
    return auth.onAuthStateChanged(user => {
      user ? dispatch(isUserLogIn('LOGGED IN!')) : dispatch(isUserLogIn('NO LOGGED!'));
      }
    )
  }
}

export const fetchSignUpData = payload => {
  return dispatch => {
    return auth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then(() => dispatch(signUp('Successfuly signed up!')))
    .catch(error => {
      console.log(error);
    })
  }
}

export const fetchSignOut = payload => {
  return dispatch => {
    return auth.signOut()
      .then(() => dispatch(signOut('Successfuly signed out! ')))
      .catch(error => console.log(error.code, error.message));
  }
}
