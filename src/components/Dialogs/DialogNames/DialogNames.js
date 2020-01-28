import classes from '../Dialog.module.css';
import React, { Component } from 'react'

export default class DialogNames extends Component {
  render() {
    return (
      <div className={classes.item}>
        <div className={classes.userLogo}>
        <img alt="userLogo" src="https://pngimage.net/wp-content/uploads/2018/06/orange-circle-png-1.png" />
      </div>
      <span id="nameLink">{this.props.name}</span>
    </div>       
    )
  }
}