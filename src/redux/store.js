import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './recuders/rootReducer';
// import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
window.store = store;

export default store;