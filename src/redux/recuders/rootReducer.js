import { combineReducers } from 'redux';
import dialogMessageReducer from './dialogMessageReducer';
import dialogNameReducer from './dialogNameReducer';
// import asyncReducer from './asyncReducer';
import { firebaseReducer } from 'react-redux-firebase';
import * as firebase from 'firebase';
import cakeReducer from './cakeReducer';
import iceCreamReducer from './iceCreamReducer';

const rootReducer = combineReducers({
  message: dialogMessageReducer,
  name: dialogNameReducer,
  firebase: firebaseReducer,
  cake: cakeReducer,
  iceCream: iceCreamReducer  
  // asyncfunc: asyncReducer
})

firebase.firestore();

export default rootReducer;