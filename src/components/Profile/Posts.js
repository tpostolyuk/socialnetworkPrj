import React from 'react';
import classes from './Posts.module.css';
import Post from './Post.js';

const Posts = () => {
  let posts = [
    {id: 1, message: 'Hey how are u?'},
    {id: 2, message: "It's not my first post"},
    {id: 3, message: "It's  my first post"},
  ]
let postsElement = posts.map((m, i) => <Post message = {m.message} key = {i} />);
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