import React from 'react';
import classes from './Posts.module.css';
import Post from './Post';

const Posts = (props) => {
   
const postsElement = props.listItem.map((item, idx) => {
  return (
 <Post 
    isEditing={item.isEditing}
    onEdit={props.onEdit}
    rmvPost={props.rmvPost} 
    onConfirmEditing={props.onConfirmEditing} 
    message={item.msg} 
    key={idx}
    id={item.id}
  />
  )});

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