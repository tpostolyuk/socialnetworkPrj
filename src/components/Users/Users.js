import React from 'react';
import classes from './Users.module.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, toggleIsFetching, toggleFollowingProgress, followUser, unfollowUser, setUsers } from '../../redux/actions/userAction';
import { usersAPI } from '../../api/api';
import { Preloader } from '../Preloader/Preloader';
import { NavLink } from 'react-router-dom';
 
const Users = () => {
  const dispatch = useDispatch();
  const pageSize = useSelector(state => state.user.pageSize);
  const totalCount = useSelector(state => state.user.totalCount);
  const currentPage = useSelector(state => state.user.currentPage);
  const isFetching = useSelector(state => state.user.isFetching);
  const users = useSelector(state => state.user.users);
  const followingInProgress = useSelector(state => state.user.followingInProgress);

  let pagesCount = Math.ceil(totalCount / pageSize);
  let pages = [];

  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  useEffect (() => {
    console.log('useeffect')
    usersAPI.getUsers(currentPage, pageSize)
      .then(response => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
      })
      .catch(err => console.log(err));
  }, [currentPage, pageSize, totalCount]); 

  const onPageChange = pageNumber => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(pageNumber, pageSize)
      .then(response => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
      })
  }

  return (
    <div className={classes.users}>
      <div className={classes.pages}>
        {
          pages.map(page => {
            return (
              <span
                key={page} 
                className={currentPage === page ? classes.page__active : ''}
                onClick={() => onPageChange(page)}>
                {page}
              </span>
            )
          })
        }
      </div>
      <div className={classes.users}>
      {isFetching ? <Preloader /> : (users.map(item => {
        return (
          <div key={item.id}>
            <NavLink to={'/profile/' + item.id}>
              <div>
                <img width="50" heigth="50" src={item.photos.large || 'https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png' } alt="userLogo"/>
                <br />
                <span>{item.name}</span>
              </div>
            </NavLink>
            <div>
            {!item.followed ? 
            <button 
              disabled={followingInProgress.some(id => id === item.id)}
              onClick={e => {
                e.preventDefault();
              dispatch(toggleFollowingProgress(true, item.id));
              usersAPI.followUser(item.id)
                .then(response => {
                  if(response.resultCode === 0) {
                    dispatch(followUser(item.id));
                    dispatch(toggleFollowingProgress(false, item.id));
                  }
                })
                .catch(err => console.log(err));
              }}>
                Follow
              </button>
             :
            <button
              disabled={followingInProgress.some(id => id === item.id)}
              onClick={e => {
                e.preventDefault();
                dispatch(toggleFollowingProgress(true, item.id));
                usersAPI.unfollowUser(item.id)
                  .then(response => {
                    if(response.resultCode === 0) {
                      dispatch(unfollowUser(item.id));
                      dispatch(toggleFollowingProgress(false, item.id));
                    }
                  })
                  .catch(err => console.log(err));
              }}>
              Unfollow
            </button>
            }
            </div>
          </div>)
      }))}
      </div>
    </div>
    );
}

export default Users;
