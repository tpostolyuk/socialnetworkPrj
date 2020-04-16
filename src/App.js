import React from 'react';
import './index.css';
import { Settings, Users, Music, Header, Profile, Dialogs, Navbar, Auth } from './components';
import {BrowserRouter, Route, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getAuthUserData } from './redux/actions/authAction';

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth, shallowEqual);

  useEffect(() => {
    dispatch(getAuthUserData());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        {!isAuth ? <Redirect to='/login' /> : <Redirect to='/profile' />}
        {isAuth ? 
          <>
            <Header />
            <div className="contentWrapper">
              <Navbar />
              <Route exact path='/dialogs' component={Dialogs} />
              <Route path='/profile/:userId?' component={Profile} />
              <Route exact path='/users' component={Users} />
              <Route exact path='/music' component={Music} />
              <Route exact path='/settings' component={Settings} />
            </div>
          </>
        : <Route exact path='/login' component={Auth} />
        }
      </div>
    </BrowserRouter>
    )
  }
