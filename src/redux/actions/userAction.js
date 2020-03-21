import { SET_CURRENT_PAGE, TOGGLE_ISFETCHING, SET_USER_PROFILE } from "./types"

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

export const toggleIsFetching = () => {
  return {
    type: TOGGLE_ISFETCHING
  }
}
