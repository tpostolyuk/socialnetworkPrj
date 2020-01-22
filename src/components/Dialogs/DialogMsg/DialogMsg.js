import React from 'react';
import classes from '../Dialog.module.css';


const DialogMsg = (props) => {
  return (
      <div className = {classes.message}>{props.msg}</div>
  );
}

export default DialogMsg;