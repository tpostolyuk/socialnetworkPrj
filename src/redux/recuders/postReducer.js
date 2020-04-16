import nanoid from 'nanoid';
import { GET_POSTS, ADD_POST, REMOVE_POST, EDIT_POST, ROLLBACK_POSTS, FINISH_EDITING_POST, SET_STATUS } from '../actions/types';

const initState = {
  postList: [],
  prevPostList: [],
  status: 'Hakuna Matata'
};

const postReducer = (state = initState, action) => {
  const {payload} = action;
  switch(action.type) {
    case GET_POSTS:
      return {
        ...state,
        postList: payload,
        prevPostList: payload
      };
    case ADD_POST: 
      return {
        ...state,
        postList: [...state.postList, {id: nanoid(5), msg: payload, isEditing: false}],
        prevPostList: [...state.postList, {id: nanoid(5), msg: payload, isEditing: false}]
      };
    case REMOVE_POST:
      const newArr = state.postList.filter(item => item.id !== payload);
      return {
        ...state,
        postList: newArr,
      }
    case ROLLBACK_POSTS:
      return {
        ...state,
        postList: state.prevPostList
      }
    case EDIT_POST:
      return { 
        ...state, 
        postList: state.postList.map(
          item => item.id === payload ? {...item, isEditing: true} : item
        )
      }
     case FINISH_EDITING_POST:
       return {
         ...state,
          postList: state.postList.map(
           item => item.id === payload.id ? {...item, msg: payload.val, isEditing: false} : item
         )
       }
      case SET_STATUS:
        return {
          ...state,
          status: payload
        }
    default: return state
  }
}

export default postReducer;