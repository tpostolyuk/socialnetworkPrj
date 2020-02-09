import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';
import classes from './Auth.module.scss';

export default class Auth extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: '',
       nickname: ''
    }
  }

  onSignUp = e => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(response => response.ok ? this.props.onAuthSignIn() : console.log(response));
    
      firebase.firestore().collection('nickname').doc('Name').set({ name: this.state.nickname })
    this.props.onAuthSignIn();
  }

  onLogin = e => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    this.props.onAuthSignIn();
  }

  setupData = data => {
    data.forEach(doc => console.log(doc.data()));
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        firebase.firestore().collection('dialogs').get().then(snapshot => this.setupData(snapshot.docs));
      } else {
        this.setupData([]);
      }
    })
  }

  render() {
    return (
      <div className={classes.settingsWrapper}>
        <form onSubmit={this.onLogin} 
              className={classes.signUpForm}>
          <TextField
            className={classes.formItem}
            label="Nickname"
            onChange={e => {
              this.setState({ nickname: e.target.value});
            }}>
          </TextField>
          <TextField 
            required 
            className={classes.formItem}
            id="standard-required1" 
            label="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <TextField
            required
            className={classes.formItem}
            id="standard-required2"
            label="Password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Button
            className={classes.formItem} 
            variant="contained"
            color="default" 
            type="submit">
            Sign In
          </Button>
          <Button
            className={classes.formIte}
            variant="contained"
            color="primary"
            onClick={this.onSignUp}>
            Sign Up            
          </Button>
        </form>
      </div>
    )
  }
}