import React, { useEffect } from 'react';
import classes from './Users.module.scss';
import { useDispatch, connect } from 'react-redux';
import { setCurrentPage, toggleIsFetching, toggleFollowingProgress, followUser, unfollowUser, setUsers } from '../../redux/actions/userAction';
import { usersAPI } from '../../api/api';
import { Preloader } from '../Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { Pagination } from '../Pagination/Pagination';

export const Users = ({ totalCount, pageSize, currentPage, isFetching, followingInProgress, users }) => {
  const dispatch = useDispatch();
  const onChange = page => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(page, pageSize)
      .then(response => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
      })
  }

  useEffect(() => {
    usersAPI.getUsers(currentPage, pageSize)
      .then(response => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        console.log('USERS - ', response);
      })
      .catch(err => console.log(err)); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]); 

  return (
    <div className={classes.users}>
      <div className={classes.pagination}>
        <Pagination itemsAmount={totalCount} itemsPerPage={pageSize} onChange={onChange}/>
      </div>
      <div className={classes.users}>
      {isFetching ? <Preloader /> : (users.map(item => {
        return (
          <div key={item.id}>
            <NavLink to={'/profile/' + item.id}>
              <img 
                width="50" 
                heigth="50" 
                src={item.photos.large || 'https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png' } 
                alt="userLogo"
              />
              <br />
              <span>{item.name}</span>
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

const mapStateToProps = state => {
  return {
    users: state.user.users,
    pageSize: state.user.pageSize,
    totalCount: state.user.totalCount,
    currentPage: state.user.currentPage,
    isFetching: state.user.isFetching,
    followingInProgress: state.user.followingInProgress
  }
}

export default connect(
  mapStateToProps,
  { setCurrentPage, toggleIsFetching, toggleFollowingProgress, followUser, unfollowUser, setUsers }
)(Users);
