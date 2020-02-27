import React from 'react';
import classes from './News.module.scss';
import * as axios from 'axios';
import { useEffect } from 'react';

const apiKey = 'fb1cd687466db10765c48be0dd860486';
 
const News = () => {
  
  useEffect (() => {
    // axios.get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=fb1cd687466db10765c48be0dd860486')
    //   .then(data => console.log(data));
  }) 
  return (
    <div className={classes.newsWrapper}>

    </div>
    );
}

export default News;
