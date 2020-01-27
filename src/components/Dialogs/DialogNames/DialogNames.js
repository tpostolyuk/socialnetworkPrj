import React from 'react';
import classes from '../Dialog.module.css';


const DialogNames = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.userLogo}>
        <img alt="userLogo" src="https://pngimage.net/wp-content/uploads/2018/06/orange-circle-png-1.png" />
      </div>
      <span>{props.name}</span>
    </div>
  );
}

export default DialogNames;