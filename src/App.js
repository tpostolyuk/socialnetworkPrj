import React, { useEffect } from 'react';
import './index.css';
import { Music, Header, Settings, Users, ProfileContainer, Dialogs, Navbar, Auth } from './components';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserData } from './redux/actions/authAction';

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);

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
              <Route exact path='/dialogs' render={() => <Dialogs />} />
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route exact path='/users' render={() => <Users />} />
              <Route exact path='/music' render={() => <Music />} />
              <Route exact path='/settings' component={() => <Settings />} />
            </div>
          </>
        : <Route exact path='/login' component={Auth} />
        }
      </div>
    </BrowserRouter>
    )
  }