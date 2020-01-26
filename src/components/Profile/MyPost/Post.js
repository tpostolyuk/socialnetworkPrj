import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return(
    <div className={classes.item}>
      <div>
        <img src="https://klike.net/uploads/posts/2019-03/1551511862_48.jpg" alt="ava" />
      </div>
      <span>{props.message}</span>
      <div className={classes.cross}>
        <span onClick={() => props.rmvPost(props.id)}>&#10006;</span>
      </div>
    </div>
    );
}

export default Post;