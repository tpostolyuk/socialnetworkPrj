import React from 'react';
import classes from './Profile.module.css';
import Description from './ProfileDescription/profileDescription';
import PostsBoard from './MyPost/PostsBoard';


const Profile = (props) => {
  return (
    <main className={classes.content}>
      <Description />
      <PostsBoard posts = {props.posts} />
    </main>
  );
}

export default Profile;