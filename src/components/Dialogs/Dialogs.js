import React from 'react';
import classes from './Dialog.module.css';
// import {BrowserRouter, Route} from 'react-router-dom';

const DialogItem = (props) => {
  return (
      <div className={classes.item}>{props.name}</div>
  );
}

const DialogMsg = (props) => {
    return (
        <div className = {classes.message}>{props.msg}</div>
    );
}
const Dialogs = () => {
  const DialogsData = [
    {id: 1, name: 'Vova'},
    {id: 2, name: 'Oleksandr'},
    {id: 3, name: 'Dmitriy'},
    {id: 4, name: 'Vasyl'},
    {id: 5, name: 'Pavlo'}
  ];

  const MsgData = [
    {id: 1, msg: "Hey!"},
    {id: 2, msg: "How's it goin'?"},
    {id: 3, msg: "All the best bro!"}
  ];

let dialogsElements = DialogsData.map((d, i) => <DialogItem key = {i} name = {d.name} />);
let msgElements = MsgData.map((m, i) => <DialogMsg msg = {m.msg} key = {i} />)

    return (
        <div className={classes.dialogWrapper}>
            <div className = {classes.dialogItems}>
              {dialogsElements}
            </div>
            <div className = {classes.dialogMessage}>
              {msgElements}
            </div>
        </div>
    );
}

export default Dialogs;