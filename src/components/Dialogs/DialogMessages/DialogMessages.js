import React, { Component } from 'react';
import classes from '../Dialog.module.css';
import diamondIcon from './diamond.png';
import * as firebase from 'firebase';


class DialogMessages extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let msgRef = firebase.firestore().collection("dialogs").doc("Vova");
    msgRef.get().then(doc => {
      console.log(doc.data().messages)
  })
  }
  render() {
  return (
    <div className={classes.message}>
      <div className={classes.msgLogo}>
        {/* {MSS} */}
        <img src={diamondIcon} alt="msgLogo" />
      </div>
      <div className={classes.friendMsg}>
        <span>{this.props.msg}</span>
      </div>
      <div className={classes.myMsg}>
        <span>{this.props.myMsg}</span>
      </div>
    </div>
  );
  }
}

export default DialogMessages;