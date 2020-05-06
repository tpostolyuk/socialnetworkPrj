import React, { useEffect, lazy, Suspense } from 'react';
import './index.css';
import { Settings, Music, Header, Profile, Dialogs, Navbar, Auth } from './components';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { getAuthUserData } from './redux/actions/authAction';
import { store } from './redux/store';

const Users = lazy(() => import('./components/Users/Users.js'));

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
              <Route path='/profile/:userId?' render={() => <Profile />} />
              <Route exact path='/users' render={() => <Suspense fallback={<div>Loading...</div>}><Users /></Suspense>} />
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

export const AppContainer = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}