import React from 'react';
import classes from './Posts.module.css';
import Post from './Post';

const Posts = (props) => {
   
let postsElement = props.listItem.map((item, idx) => <Post isEdited={props.isEdited} rmvPost={props.rmvPost} editPost={props.editPost} confirmEdit={props.confirmEdit} message={item.msg} key={idx} id={item.id} />);

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