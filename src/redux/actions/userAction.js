import { SET_CURRENT_PAGE } from "./types"

export const setCurrentPage = payload => {
  return {
    type: SET_CURRENT_PAGE,
    payload
  }
}