import React from 'react';
import classes from './Users.module.scss';
import * as axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, toggleIsFetching } from '../../redux/actions/userAction';
import { Preloader } from '../Preloader/Preloader';
import { NavLink } from 'react-router-dom';
 
const Users = () => {
  const [userData, setUserData] = useState([]);
  const pageSize = useSelector(state => state.user.pageSize);
  const totalCount = useSelector(state => state.user.totalCount);
  const currentPage = useSelector(state => state.user.currentPage);
  const isFetching = useSelector(state => state.user.isFetching);
  const dispatch = useDispatch();

  let pagesCount = Math.ceil(totalCount / pageSize);
  let pages = [];
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  useEffect (() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        setUserData(response.data.items);
        dispatch(toggleIsFetching());
      })
      .catch(err => console.log(err));
  }, [currentPage, pageSize, totalCount, dispatch]); 

  return (
    <div className={classes.users}>
      <div className={classes.pages}>
        {
          pages.map(page => {
            return (
              <span
                key={page} 
                className={currentPage === page ? classes.page__active : ''}
                onClick={() => {
                  dispatch(toggleIsFetching());
                  dispatch(setCurrentPage(page));
                }}>
                {page}
              </span>
            )
          })
        }
      </div>
      <div className={classes.users}>
      {isFetching ? <Preloader /> : (userData.map(item => {
        return (
          <NavLink key={item.id} to={'/profile/' + item.id}>
            <div>
              {item.name}
            </div>
          </NavLink>)
      }))}
      </div>
    </div>
    );
}

export default Users;
