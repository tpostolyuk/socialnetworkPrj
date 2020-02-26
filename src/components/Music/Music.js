import React from 'react';
import classes from './Music.module.scss';
import Card from '../News/Card';

const Music = () => {
    return (
        <div className={classes.musicWrapper}>
          <div className={classes.itemContainer}>
            <Card price={15} textTitle='Green Apple' textContent='The best apple you have seen in the world!' />
            <Card price={12} textTitle='Red Papaya' textContent='Feel the incredible taste of this fruit !'/>
            <Card price={22} textTitle='Blue Mango' textContent='Have you ever tried this?'/>
            <Card price={10} textTitle='Green Apple' textContent="Mmmm, who don't like bananas???"/>
          </div>
        </div>
    );
}

export default Music;