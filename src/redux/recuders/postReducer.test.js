import postReducer from './postReducer';
import { addPost, removePost } from '../actions/postAction';

describe('Post', () => {
  it('Length of posts should increment', () => {
    // 1. Test data
      const action = addPost('Test data');
      const state = {
        postList: [],
        prevPostList: [],
        status: 'Hakuna Matata'
      };
    // 2. Action
      let newState = postReducer(state, action);
    // 3. Expectation
      expect(newState.postList.length).toBe(1);
    })
  it('Lenght of posts should decreent', () => {
    const action = removePost(1);
    const state = {
      postList: [],
      prevPostList: [],
      status: 'Hakuna Matata'
    };
    const newState = postReducer(state, action);

    expect(newState.postList.length).toBe(0);
  })    
})
