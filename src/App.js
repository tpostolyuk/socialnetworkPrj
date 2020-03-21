import React from 'react';
import './index.css';
import { Settings, Users, Music, Header, Profile, Dialogs, Navbar } from './components';
import {BrowserRouter, Route } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
          <React.Fragment>
            <Header />
            <div className="contentWrapper">
              <Navbar />
              <Route path='/dialogs' component={Dialogs} />
              <Route path='/profile/:userId' render={() => <Profile />} />
              <Route path='/users' component={Users} />
              <Route path='/music' component={Music} />
              <Route path='/settings' component={Settings} />
            </div>
          </React.Fragment>
      </div>
    </BrowserRouter>
    )
  }
