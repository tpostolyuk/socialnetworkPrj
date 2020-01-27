import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return(
    <div className={classes.itemWrapper}>
      <div className={classes.item}>
        <img src="https://klike.net/uploads/posts/2019-03/1551511862_48.jpg" alt="ava" />
        <span className={classes.postMsgSpan}>{props.message}</span>
      </div>
      <div className={classes.crossContainer}>
        <span onClick={() => props.rmvPost(props.id)}>&#10006;</span>
      </div>
    </div>
    );
}

export default Post;