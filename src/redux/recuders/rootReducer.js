import { combineReducers } from 'redux';
import dialogMessageReducer from './dialogMessageReducer';
import dialogNameReducer from './dialogNameReducer';
import { firebaseReducer } from 'react-redux-firebase';
import cardReducer from './cardReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  messages: dialogMessageReducer,
  name: dialogNameReducer,
  firebase: firebaseReducer,
  card: cardReducer,
  post: postReducer,
  names: dialogNameReducer
})

export default rootReducer;
