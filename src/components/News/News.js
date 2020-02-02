import React from 'react';
import classes from './News.module.css'
import { createStore } from 'redux';

const initialState = {
  name: 'Taras',
  age: 17
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_NAME' : return {...state, name: action.payload}

    case 'CHANGE_AGE' : return {...state, age: action.payload}

    default: return state;
  }
}

const store = createStore(reducer);

const changeName = {
  type: "CHANGE_NAME",
  payload: "Andrii"
}

const changeAge = {
  type: "CHANGE_AGE",
  payload: 18
}

store.dispatch(changeName);
store.dispatch(changeAge);

console.log(store);

class News extends React.Component {

render() {
  return (
    <div className={classes.newsWrapper}>

    </div>
    );
  }
}

export default News;