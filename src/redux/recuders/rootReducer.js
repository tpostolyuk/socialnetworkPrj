import { combineReducers } from 'redux';
import dialogMessageReducer from './dialogMessageReducer';
import dialogNameReducer from './dialogNameReducer';
import { firebaseReducer } from 'react-redux-firebase';
import postReducer from './postReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  messages: dialogMessageReducer,
  name: dialogNameReducer,
  firebase: firebaseReducer,
  post: postReducer,
  names: dialogNameReducer,
  auth: authReducer,
  user: userReducer
})

export default rootReducer;
