import React, { Component } from 'react';
import './index.css';
import { Settings, News, Music, Header, Profile, Dialogs, Navbar, Auth } from './components';
import {BrowserRouter, Route } from 'react-router-dom';
import firebase from './config';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.onAuthSignOut = this.onAuthSignOut.bind(this);
    this.onAuthSignIn = this.onAuthSignIn.bind(this);
    this.state = {
      isAuth: false,
    }
  }
  
  onAuthSignOut() {
    firebase.auth().signOut()
      .catch(error => console.log(error.code, error.message));
    this.setState({isAuth: true});
  }
  onAuthSignIn() {
    this.setState({isAuth: false});
  }

  render() {
  if(this.state.isAuth) {
   return (
    <BrowserRouter>
      <Route path='/auth'><Auth onAuthSignIn={this.onAuthSignIn} isAuth={this.state.isAuth} /></Route>
    </BrowserRouter>
   )
 } else {
   return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header onAuthSignOut={this.onAuthSignOut}/>
      <div className="contentWrapper">
      <Navbar />
      <Route 
        path='/dialogs'
        component={Dialogs}/>
      <Route path='/profile' render={() => <Profile />} />
      <Route path='/news' render={() => <News />} />
      <Route path='/music' component={Music} />
      <Route path='/settings' component={Settings} />
      </div>
    </div>
  </BrowserRouter>
   )
 }
}
}
