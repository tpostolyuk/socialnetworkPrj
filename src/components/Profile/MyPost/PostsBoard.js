import React, { useState, useEffect } from 'react';
import classes from './Posts.module.css';
import Posts from './Posts';
import nanoid from 'nanoid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addPost, getPosts, editPost, finishEditingPost, removePost, rollBackPosts } from '../../../redux/actions/postAction';
import { dbRef } from '../../../config';
import { useSelector, useDispatch } from 'react-redux';

const PostsBoard = () => {
  const [currentValue, setCurrentValue] = useState('');
  const posts = useSelector(state => state.post.postList);
  const dispatch = useDispatch();

  const sendPost = () => {
    if(currentValue !== '') {
      dbRef.add({
        msg: currentValue,
        id: nanoid(5),
        isEditing: false
      })
      .then(() => {
        dispatch(addPost(currentValue))
        setCurrentValue('');
      })
      .catch(() => dispatch(rollBackPosts()));
    } else alert('Enter a message');
  }

  const finishEditingPostHandler = ({id, val}) => {
    dbRef.doc(id).set({ msg: val })
      .then(() => dispatch(finishEditingPost({id, val})))
      .catch(() => dispatch(rollBackPosts()));
  }

  const removingPostHandler = id => {
    dbRef.doc(id).delete()
      .then(() => dispatch(removePost(id)))
      .catch(() => dispatch(rollBackPosts()))
  }

  useEffect(() => {
    dbRef.get()
      .then(snap => {
        const result = [];
        snap.forEach(doc => result.push({...doc.data(), id: doc.id}));
        dispatch(getPosts(result));
  })
  }, [dispatch]) 

  return (
    <>
       <TextField
        className={classes.postsTextArea}
        value={currentValue}
        onChange={e => setCurrentValue(e.target.value)}
        type="text"
      />
      <Button
        variant="contained" 
        color="primary"
        onClick={sendPost}>
        Send
      </Button>
      <Posts 
        removePost={removingPostHandler}
        editPost={editPost}
        finishEditingPost={finishEditingPostHandler}
        posts={posts}
      />
    </>
  )
}

export default PostsBoard;
