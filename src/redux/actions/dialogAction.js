import { GET_NAMES, GET_MESSAGES } from '../constants/types';
export const getNames = payload => {
  return {
    type: GET_NAMES,
    payload
  }
} 

export const getMessages = payload => {
  return {
    type: GET_MESSAGES,
    payload
  }
}