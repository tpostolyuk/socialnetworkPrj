import React, { useEffect } from 'react';
import classes from './Profile.module.css';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getUserProfile } from '../../redux/actions/userAction';
import { getStatus } from '../../redux/actions/postAction';
import { withRouter } from 'react-router-dom';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { PostsBoard } from './MyPost/PostsBoard';

export const Profile = props => {
  const dispatch = useDispatch();
  const profileInfo = useSelector(state => state.user.profile, shallowEqual);

  useEffect(() => {
    let userId = props.match.params.userId;
    if(!userId) {userId = 6213};
    dispatch(getUserProfile(userId));
    dispatch(getStatus(userId));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className={classes.content}>
      <ProfileDescription profileInfo={profileInfo} />
      <PostsBoard />
    </main>
  )
}

const WithUrlDataContainerComponent = withRouter(Profile);

export default WithUrlDataContainerComponent;
