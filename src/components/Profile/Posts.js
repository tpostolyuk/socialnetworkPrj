import React from 'react';
import classes from './Posts.module.css';
import Post from './Post.js';

const Posts = () => {
    return (
        <div className={classes.posts}>
            <div>
                <span>My posts</span>
            </div>
            <div className={classes.postWrapper}>
                <Post message="Hey, how are u?" />
                <Post message="It's not my first post" />
            </div>
        </div>
    );
}

export default Posts;