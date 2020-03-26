import { SET_CURRENT_PAGE, TOGGLE_ISFETCHING, SET_USER_PROFILE, FOLLOW_USER, UNFOLLOW_USER, SET_USERS, FOLLOWING_IN_PROGRESS } from "./types"
import { profileAPI } from "../../api/api"

export const setCurrentPage = payload => {
  return {
    type: SET_CURRENT_PAGE,
    payload
  }
}

export const setUserProfile = payload => {
  return {
    type: SET_USER_PROFILE,
    payload
  }
}

export const getUserProfile = userId => dispatch => {
  profileAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response))
  })
}

export const toggleIsFetching = payload => {
  return {
    type: TOGGLE_ISFETCHING,
    payload
  }
}

export const setUsers = payload => {
  return {
    type: SET_USERS,
    payload
  }
}

export const followUser = payload => {
  return {
    type: FOLLOW_USER,
    payload
  }
}

export const unfollowUser = payload => {
  return {
    type: UNFOLLOW_USER,
    payload
  }
}

export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
  }
}