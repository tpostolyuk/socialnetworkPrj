import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import Auth from './components/Auth/Auth';
import {BrowserRouter, Route} from 'react-router-dom';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDM8SiNPZeG6rkuljPk0P_N7vYSkyJMBz4",
  authDomain: "macmoonnetwork.firebaseapp.com",
  databaseURL: "https://macmoonnetwork.firebaseio.com",
  projectId: "macmoonnetwork",
  storageBucket: "macmoonnetwork.appspot.com",
  messagingSenderId: "604587974747",
  appId: "1:604587974747:web:87d823b8511282dbfcdf7e"
};

firebase.initializeApp(firebaseConfig);

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="contentWrapper">
        <Navbar />
        <Route 
          path='/dialogs'
          render={() => <Dialogs
          DialogsNameData={props.store.getState().DialogsNameData}
          DialogsMsgData={props.store.getState().DialogsMsgData}
          DialogsMyMsgData={props.store.getState().DialogsMyMsgData} />}/>
        <Route path='/profile' render={() => <Profile dispatch={props.dispatch} />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;
