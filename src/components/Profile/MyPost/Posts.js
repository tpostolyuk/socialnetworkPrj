import React from 'react';
import classes from './Posts.module.css';
import Post from './Post';
import { useSelector } from 'react-redux';

const Posts = props => {
  const posts = useSelector(state => state.post.postList);
  const postElement = posts.map(item => {
    return (
      <Post
        isEditing={item.isEditing}
        onEditPost={props.onEditPost}
        onFinishEditingPost={props.onFinishEditingPost}
        onRemovePost={props.onRemovePost}
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