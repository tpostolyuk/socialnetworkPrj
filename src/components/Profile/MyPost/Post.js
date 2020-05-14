import classes from './Post.module.css';
import React, { useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';

export const Post = ({isEditing, message, id, removePost, editPost, renderIfIsEditable, finishEditingPost}) => {
  const [newPostValue, setNewPostValue] = useState('');
  const dispatch = useDispatch();

  const renderDefault = () => {
    return (
      <React.Fragment>
      <div className={classes.item}>
        <img src="https://klike.net/uploads/posts/2019-03/1551511862_48.jpg" alt="ava" />
        <span className={classes.postMsgSpan}>{message}</span>
      </div>
      <div className={classes.crossContainer}>
        <span onClick={() => removePost(id)}>&#10006;</span>
        <span onClick={() => {
          dispatch(editPost(id))
        }}>EDIT</span>
      </div>
      </React.Fragment>
    );
  }

  renderIfIsEditable = () => {
    return (
      <React.Fragment>
        <div className={classes.item}>
          <TextField  
            onChange={e => setNewPostValue(e.target.value)} 
            value={newPostValue}
            type="text"
            label="Tell your news" 
          />
        </div>
        <div className={classes.crossContainer}>
          <span onClick={() => removePost(id)}>&#10006;</span>
          <span onClick={() => finishEditingPost({id, val: newPostValue})}>&#10003;</span>
        </div>
      </React.Fragment> 
    )
  }

  return (
    <div className={classes.itemWrapper}>
      {
        !isEditing ? (
          <React.Fragment>
            {renderDefault()}
          </React.Fragment>)
        : (
          <React.Fragment>
            {renderIfIsEditable()}
          </React.Fragment>) 
      }
    </div>
  )
}
