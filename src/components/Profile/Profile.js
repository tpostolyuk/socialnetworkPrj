import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Profile.module.css';
import Description from './ProfileDescription/ProfileDescription';
import PostsBoard from './MyPost/PostsBoard';
import { getUserProfile } from '../../redux/actions/userAction';
import { getStatus } from '../../redux/actions/postAction';
import { withRouter } from 'react-router-dom';

export const Profile = props => {
  const [isLoad, setIsLoad] = useState(false);
  const dispatch = useDispatch();
  const profileInfo = useSelector(state => state.user.profile);

  useEffect(() => {
    let userId = props.match.params.userId;
    if(!userId) {userId = 6213};
    dispatch(getUserProfile(userId));
    dispatch(getStatus(userId));
    setIsLoad(true);
  }, [dispatch, props.match.params.userId])

  return (
    <main className={classes.content}>
      <Description isLoad={isLoad} profileInfo={profileInfo} />
      <PostsBoard />
    </main>
  )
}

const WithUrlDataContainerComponent = withRouter(Profile);

export default WithUrlDataContainerComponent;
