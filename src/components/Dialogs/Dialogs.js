import React from 'react';
import classes from './Dialog.module.css';
import {BrowserRouter, Route} from 'react-router-dom';

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
    return (
        <div className={classes.dialogWrapper}>
            <div className = {classes.dialogItems}>
                <DialogItem name='Vova'/>
                <DialogItem name='Oleksandr'/>
                <DialogItem name='Dmitriy'/>
                <DialogItem name='Vasyl'/>
                <DialogItem name='Pavlo'/>
            </div>
            <div className = {classes.dialogMessage}>
                <DialogMsg msg='Hey!'/>
                <DialogMsg msg="How's it goin'?"/>
                <DialogMsg msg='All the best bro ;D'/>
            </div>
        </div>
    );
}

export default Dialogs;