import React, { useEffect, useState }  from 'react';
import classes from './Settings.module.scss';
import { Pagination } from './Pagination';
import axios from 'axios';

export const Settings = () => {
  const [comments, setComments] = useState([]);
  const onChange = page => {
    console.log(page);
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => setComments(response.data))
  }, []);
  
  return (
    <div className={classes.settingsWrapper}>
      <Pagination itemsAmount={comments.length} itemsPerPage={50} onChange={onChange}/>
    </div>
  )
}

export default Settings;
