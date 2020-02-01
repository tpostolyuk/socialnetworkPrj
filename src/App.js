import React from 'react';
import './index.css';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import Dialogs from './components/Dialogs/Dialogs.js';
import News from './components/News/News.js';
import Music from './components/Music/Music.js';
import Settings from './components/Settings/Settings.js';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="contentWrapper">
        <Navbar />
        <Route path='/dialogs'
        render={() => <Dialogs
         DialogsNameData={props.store.getState().DialogsNameData}
         DialogsMsgData={props.store.getState().DialogsMsgData}
         DialogsMyMsgData={props.store.getState().DialogsMyMsgData} />}/>
         
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
