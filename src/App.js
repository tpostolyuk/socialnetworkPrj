import React, { Component } from 'react';
import './index.css';
import { Settings, News, Music, Header, Profile, Dialogs, Navbar, Auth } from './components';
import {BrowserRouter, Route } from 'react-router-dom';
import * as firebase from 'firebase';
import firebaseConfig from './config';

export default class App extends Component {
  constructor(props) {
    super(props)
    firebase.initializeApp(firebaseConfig);
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

  componentDidMount() {
    // firebase.firestore().collection('dialogs').get().then(snapshot => setupData(snapshot.docs));
    // const setupData = data => {
    //   data.forEach(doc => {
    //     console.log(doc.data());
    //   })
    // }
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
        render={() => <Dialogs
        DialogsNameData={this.props.store.getState().DialogsNameData}
        DialogsMsgData={this.props.store.getState().DialogsMsgData}
        DialogsMyMsgData={this.props.store.getState().DialogsMyMsgData} />}/>
      <Route path='/profile' render={() => <Profile dispatch={this.props.dispatch} />} />
      <Route path='/news' render={() => <News renderr={this.onRenderData} />} />
      <Route path='/music' component={Music} />
      <Route path='/settings' component={Settings} />
      </div>
    </div>
  </BrowserRouter>
   )
 }
}
}