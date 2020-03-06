import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import { Settings, News, Music, Header, Profile, Dialogs, Navbar, Auth } from './components';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchIsUserLogIn } from './redux/actions/authAction';

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIsUserLogIn())
    
  }, []);
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Switch>
          {isAuth ? <Route path="/auth" component={Auth} /> : (
          
            <React.Fragment>
              <Header />
              <div className="contentWrapper">
                <Navbar />
                <Route path='/dialogs'component={Dialogs}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
              </div>
            </React.Fragment>
          )}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }


export default App;
