import React from 'React';
import classes from '../Dialog.module.css';


const DialogItem = (props) => {
  return (
      <div className={classes.item}>{props.name}</div>
  );
}

export default DialogItem;