import React from 'react';
import classes from './Posts.module.css';
import Post from './Post';
import { connect } from 'react-redux';

const Posts = props => {
const postElement = props.posts.map(item => {
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
const mapStateToProps = state => {
  return {
    posts: state.post.postList
  }
} 

export default connect(mapStateToProps)(Posts);