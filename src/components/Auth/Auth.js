import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './Auth.module.scss';
import { fetchSignUpData } from '../../redux/actions/authAction';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const signUp = e => {
    e.preventDefault();
    dispatch(fetchSignUpData({email, password}))
  }

  return (
    <div className={classes.settingsWrapper}>
      <form className={classes.signUpForm}>
        <TextField 
          required 
          className={classes.formItem}
          id="standard-required1" 
          label="Email"
          onChange={e => setEmail(e.target.value )}
        />
        <TextField
          required
          className={classes.formItem}
          id="standard-required2"
          label="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          className={classes.formItem} 
          variant="contained"
          color="default" 
          type="submit"
          >Sign In
        </Button>
        <Button
          className={classes.formItem}
          variant="contained"
          color="primary"
          type="submit"
          onClick={e => signUp(e)}>
          Sign Up            
        </Button>
      </form>
    </div>
  )
}

export default Auth; 
