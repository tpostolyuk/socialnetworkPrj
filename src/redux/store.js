import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './recuders/rootReducer';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

const unSubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(fetchUsers());
unSubscribe();

export default store;