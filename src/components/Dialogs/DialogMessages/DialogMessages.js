import React from 'react';
import classes from '../Dialog.module.css';
import diamondIcon from './diamond.png';

const DialogMessages = props => {
  return (
    <div className={classes.message}>
      <div className={classes.msgLogo}>
        <img src={diamondIcon} alt="msgLogo" />
      </div>
      <div className={classes.friendMsg}>
        <span>{props.msg}</span>
      </div>
    </div>
  )
}

export default DialogMessages;