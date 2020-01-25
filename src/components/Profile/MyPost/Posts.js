import React from 'react';
import classes from './Posts.module.css';
import Post from './Post';
import nanoid from 'nanoid';

 const Posts = (props) => {
   
 let postsElement = props.listItem.map((m, i) => <Post rmvPost = {props.rmvPost} message = {m.msg} key = {i} id = {nanoid(9)} />);

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