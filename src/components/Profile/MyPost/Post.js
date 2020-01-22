import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return(
        <div className={classes.item}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511862_48.jpg" alt="ava" />
            <span>{props.message}</span>
        </div>
    );
}

export default Post;