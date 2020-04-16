import React from 'react';
import classes from './ProfileDescription.module.css';
import { ProfileStatus } from './ProfileStatus';

export const ProfileDescription = ({profileInfo}) => {
  if(!profileInfo) {
    return <h1>Loading...</h1>
  } else {
  return (
    <div className={classes.description}>
      <div className={classes.descriptionLogo}>
        <img alt="userPhoto" src={profileInfo.photos.large ? profileInfo.photos.large : 'https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png'}/>
        <ProfileStatus />
      </div>
      <div className={classes.descriptionText}>
        <h1>{profileInfo.fullName}</h1>
        <p>Date of birth: 15 may</p>
        <p>City: Ternopil</p>
        <p>Web-site: @taraspostoliuk</p>
      </div>
    </div>
  );
  }
}
