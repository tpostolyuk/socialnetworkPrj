import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, message: 'Hey how are u?'},
  {id: 2, message: "It's not my first post"},
  {id: 3, message: "It's  my first post"},
];
const ddata = [
  {id: 1, name: 'Vova'},
  {id: 2, name: 'Oleksandr'},
  {id: 3, name: 'Dmitriy'},
  {id: 4, name: 'Vasyl'},
  {id: 5, name: 'Pavlo'}
];
const mdata = [
  {id: 1, msg: "Hey!"},
  {id: 2, msg: "How's it goin'?"},
  {id: 3, msg: "All the best bro!"}
];

// mdata - MessageData ddata - DialogData


ReactDOM.render(<App posts = {posts} ddata = {ddata} mdata = {mdata} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
