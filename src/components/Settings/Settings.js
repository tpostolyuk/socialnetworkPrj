import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';
import classes from './Settings.module.css';

export default class Settings extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: ''
    }
  }

  onSignUp = e => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  }

  onLogOut = () => {
    firebase.auth().signOut().then(() => {
      console.log('You logged out!')
    }).catch(error => console.log(error.code, error.message));
  }

  render() {
    return (
      <div className={classes.settingsWrapper}>
        <form onSubmit={this.onSignUp} 
              className={classes.signUpForm}>
          <TextField 
            required 
            id="standard-required1" 
            label="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <TextField
            required
            id="standard-required2"
            label="Password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Button variant="contained" color="default" type="submit">Submit</Button>
          <Button variant="container" color="primary" onClick={this.onLogOut}>Log Out</Button>
        </form>
      </div>
    )
  }
}
