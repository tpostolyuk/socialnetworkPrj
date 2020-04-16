import { combineReducers } from 'redux';
import dialogMessageReducer from './dialogMessageReducer';
import dialogNameReducer from './dialogNameReducer';
import postReducer from './postReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  messages: dialogMessageReducer,
  name: dialogNameReducer,
  post: postReducer,
  names: dialogNameReducer,
  auth: authReducer,
  user: userReducer
})
