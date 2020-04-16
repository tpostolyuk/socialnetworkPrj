import React from 'react';
import classes from './Header.module.css';
import logo from './logo.png';
import Navigation from './Navigation/Navigation';
import { useSelector } from 'react-redux';

export const Header = () => { 
  const login = useSelector(state => state.auth.login);
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <header className={classes.header}>
      <div>
        <div className={classes.headerLogo}>
          <img src={logo} alt="site-logo"/>
        </div>
      </div>
      <div className={classes.headerText}>
        <h1>my little blog</h1>
      </div>
      <Navigation login={login} isAuth={isAuth} />
    </header>
  )
}

export default Header;
