import React from 'react';
import classes from './Profile.module.css';
import Description from './profileDescription.js';
import PostsBoard from './PostsBoard';


const Profile = () => {
  return (
    <main className={classes.content}>
      <Description />
      <PostsBoard />
    </main>
  );
}

export default Profile;