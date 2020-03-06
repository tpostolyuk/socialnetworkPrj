import { SET_CURRENT_PAGE, TOGGLE_ISFETCHING } from "./types"

export const setCurrentPage = payload => {
  return {
    type: SET_CURRENT_PAGE,
    payload
  }
}

export const toggleIsFetching = () => {
  return {
    type: TOGGLE_ISFETCHING
  }
}