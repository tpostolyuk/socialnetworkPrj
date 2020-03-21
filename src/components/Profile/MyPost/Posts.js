import React from 'react';
import classes from './Posts.module.css';
import Post from './Post';

const Posts = props => {
  const postElement = props.posts.map(item => {
    return (
      <Post
        isEditing={item.isEditing}
        editPost={props.editPost}
        finishEditingPost={props.finishEditingPost}
        removePost={props.removePost}
        message={item.msg} 
        key={item.id}
        id={item.id}
      />
    );
  })

  return (
    <div className={classes.posts}>
      <div>
        <span>My posts</span>
      </div>
      <div className={classes.postWrapper}>
        {postElement}
      </div>
    </div>
     );

 }

export default Posts;