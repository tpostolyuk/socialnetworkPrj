import { ADD_POST, EDIT_POST, FINISH_EDITING_POST, REMOVE_POST, GET_POSTS, ROLLBACK_POSTS, SET_STATUS } from './types';
import { profileAPI } from '../../api/api';

export const addPost = payload => {
  return {
    type: ADD_POST,
    payload
  }
}

export const editPost = payload => {
  return {
    type: EDIT_POST,
    payload
  }
}

export const finishEditingPost = payload => {
  return {
    type: FINISH_EDITING_POST,
    payload
  }
}

export const removePost = payload => {
  return {
    type: REMOVE_POST,
    payload
  }
}

export const getPosts = payload => {
  return {
    type: GET_POSTS,
    payload
  }
}

export const rollBackPosts = () => {
  return {
    type: ROLLBACK_POSTS
  }
}

export const setStatus = payload => {
  return {
    type: SET_STATUS,
    payload
  }
}

export const getStatus = payload => dispatch => {
  profileAPI.getStatus(payload)
    .then(response => dispatch(setStatus(response.data)));
}

export const updateStatus = payload => dispatch => {
  profileAPI.updateStatus(payload)
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setStatus(payload))
      }
    })
    .catch(e => console.log(e.message));
}
