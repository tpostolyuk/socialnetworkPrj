import React from 'react';
import classes from './News.module.scss';
import * as axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/actions/userAction';
 
const News = () => {
  const [userData, setUserData] = useState([]);
  const pageSize = useSelector(state => state.user.pageSize);
  const totalCount = useSelector(state => state.user.totalCount);
  const currentPage = useSelector(state => state.user.currentPage);
  const dispatch = useDispatch();

  let pagesCount = Math.ceil(totalCount / pageSize);
  let pages = [];
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  useEffect (() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(response => setUserData(response.data.items))
      .catch(err => console.log(err));
  }, [currentPage, pageSize]); 

  return (
    <div className={classes.newsWrapper}>
      <div className={classes.pages}>
        {pages.map(page => {
          return (
            <span
              key={page} 
              className={currentPage === page ? classes.page__active : ''}
              onClick={() => dispatch(setCurrentPage(page))}>{page}</span>
          );
        })}
      </div>
      <div className={classes.users}>
        {userData.map(item => {
          return (
            <div key={item.id}>{item.name}</div>
          );
        })}
      </div>
    </div>
    );
}

export default News;
