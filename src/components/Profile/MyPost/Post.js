import classes from './Post.module.css';
import React from 'react'

export default class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    if(this.props.isEdited === false) {
      return (
        <div className={classes.itemWrapper}>
          <div className={classes.item}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511862_48.jpg" alt="ava" />
            <span className={classes.postMsgSpan}>{this.props.message}</span>
          </div>
          <div className={classes.crossContainer}>
            <span onClick={() => this.props.rmvPost(this.props.id)}>&#10006;</span>
            <span onClick={() => this.props.editPost(this.props.id)}>EDIT</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.itemWrapper}>
          <div className={classes.item}>
            <div>
              <textarea onChange={() => this.props.onChange(this.props.id)} value={this.props.message}></textarea>
            </div>
          </div>
          <div className={classes.crossContainer}>
            <span onClick={() => this.props.rmvPost(this.props.id)}>&#10006;</span>
            <span onClick={this.props.confirmEdit}>&#10003;</span>
          </div>
        </div>
      );
    }
  }
} 
