import React from 'react';
import classes from './Posts.module.css';
import Post from './Post';

const Posts = (props) => {

let postsElement = props.posts.map((m, i) => <Post message = {m.message} key = {i} />);
    return (
        <div className={classes.posts}>
            <div>
                <span>My posts</span>
            </div>
            <div className={classes.postWrapper}>
               {postsElement}
            </div>
        </div>
    );
}

export default Posts;