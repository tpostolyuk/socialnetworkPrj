import classes from './Post.module.css';
import React from 'react'

export default class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textAreaValue: props.message,
    }
  }

  handleChange = (e) => {
    this.setState({
      textAreaValue: e.target.value
    })
  }
  onKeyDownHandler = (event) => {
    return event.keyCode === 13 ? this.props.onConfirmEditing({ id: this.props.id, msg: this.state.textAreaValue }) : '';
  }

  renderDefault = () => {
    return (
      <React.Fragment>
      <div className={classes.item}>
        <img src="https://klike.net/uploads/posts/2019-03/1551511862_48.jpg" alt="ava" />
        <span className={classes.postMsgSpan}>{this.props.message}</span>
      </div>
      <div className={classes.crossContainer}>
        <span onClick={() => this.props.rmvPost(this.props.id)}>&#10006;</span>
        <span onClick={() => this.props.onEdit(this.props.id)}>EDIT</span>
      </div>
      </React.Fragment>
    );
  }
  renderIfIsEditable = () => {
    return (
      <React.Fragment>
        <div className={classes.item}>
          <textarea onKeyDown={this.onKeyDownHandler} onChange={this.handleChange} value={this.state.textAreaValue}></textarea>
        </div>
        <div className={classes.crossContainer}>
          <span onClick={() => this.props.rmvPost(this.props.id)}>&#10006;</span>
          <span onClick={() => this.props.onConfirmEditing({ id: this.props.id, msg: this.state.textAreaValue })}>&#10003;</span>
        </div>
      </React.Fragment>
      
    )
  }
  
  render() {
      return (
        <div className={classes.itemWrapper}>
            {
            !this.props.isEditing ? (
              <React.Fragment>
                {this.renderDefault()}
              </React.Fragment> )
              : (
              <React.Fragment>
                {this.renderIfIsEditable()}
              </React.Fragment>) 
            }
        </div>
      );
  }
}







