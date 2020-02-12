import React, { Component } from 'react';
import classes from '../Dialog.module.css';
import diamondIcon from './diamond.png';

class DialogMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {  
  return (
    <div className={classes.message}>
      <div className={classes.msgLogo}>
        <img src={diamondIcon} alt="msgLogo" />
      </div>
      <div className={classes.friendMsg}>
        <span>{this.props.msg}</span>
      </div>
    </div>
  );
  }
}

export default DialogMessages;