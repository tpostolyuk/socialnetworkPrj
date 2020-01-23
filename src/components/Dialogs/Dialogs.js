import React from 'react';
import classes from './Dialog.module.css';
// import {BrowserRouter, Route} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import DialogMsg from './DialogMsg/DialogMsg';

const Dialogs = (props) => {
  

let dialogsElements = props.ddata.map((d, i) => <DialogItem key = {i} name = {d.name} />);
let msgElements = props.mdata.map((m, i) => <DialogMsg msg = {m.msg} key = {i} />)

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