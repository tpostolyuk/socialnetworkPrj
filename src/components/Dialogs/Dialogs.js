import React from 'react';
import classes from './Dialog.module.css';
import DialogNames from './DialogNames/DialogNames';
import DialogMessages from './DialogMessages/DialogMessages';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {

let dialogsNameItem = props.DialogsNameData.map((d, i) => <NavLink to={`/dialogs/${d.name}`}><DialogNames  name={d.name} key={i} /></NavLink>);
let dialogsMsgItem = props.DialogsMsgData.map((m, i) => <DialogMessages msg={m.msg} key={i} />);
let dialogsMyMsgItem = props.DialogsMyMsgData.map((m, i) => <DialogMessages myMsg={m.myMsg} key={i} />)

  return (
    <div className={classes.dialogWrapper}>
      <div className={classes.dialogNameItems}>
        {dialogsNameItem}
      </div>
      <div className={classes.dialogMessageItems}>
        <div className={classes.dialogsMsgItem}>
          {dialogsMsgItem}
        </div>
        <div className={classes.dialogsMyMsgItem}>
          {dialogsMyMsgItem}
        </div>
      </div>
    </div>
    );
}

export default Dialogs;