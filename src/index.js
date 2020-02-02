import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';


import { createStore } from 'redux';


const initialState = {
  name: 'Taras',
  age: 17
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_NAME' : return {...state, name: action.payload}
    case 'CHANGE_AGE' : return {...state, age: action.payload}
    default : return state;
  }
}

const storee = createStore(reducer);

const changeName = {
  type: "CHANGE_NAME",
  payload: "Andrii"
}

const changeAge = {
  type: "CHANGE_AGE",
  payload: 18
}

storee.dispatch(changeAge);
storee.dispatch(changeName);

console.log(storee.getState());

ReactDOM.render(<App store = {store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
