import React from 'react';
import classes from './profileDescription.module.css';

const profileDescription = () => {
    return (
        <div className={classes.description}>
            <div className={classes.descriptionLogo}>
                <img src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"/>
            </div>
            <div className={classes.descriptionText}>
                <h1>Taras P.</h1>
                <p>Date of birth: 15 may</p>
                <p>City: Ternopil</p>
                <p>Web-site: @taraspostoliuk</p>
            </div>
        </div>
    );
}

export default profileDescription;