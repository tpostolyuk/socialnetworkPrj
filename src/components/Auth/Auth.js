import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './Auth.module.scss';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions/authAction';

export const Auth = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },

    onSubmit: values => {
      dispatch(logIn({email: values.email, password: values.password, rememberMe: values.rememberMe}))
    },
  });

  return (
    <div className={classes.auth}>
      <form onSubmit={formik.handleSubmit} className={classes.signUpForm}>
        <TextField
          required
          className={classes.formItem}
          id="standard-required1"
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <TextField
          required
          className={classes.formItem}
          id="standard-required2"
          label="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button
          className={classes.formItem}
          variant="contained"
          color="default"
          type="submit">
          Sign In
        </Button>
        <label htmlFor="checkbox">Remeber me</label>
        <input
          onChange={() => formik.values.rememberMe = !formik.values.rememberMe} 
          type="checkbox" 
          name="checkbox" 
        />
      </form>
    </div>
  )
}
