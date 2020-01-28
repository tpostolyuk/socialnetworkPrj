import React from 'react';
import classes from './Header.module.css';
import logo from './logo.png';
const Header = () => {
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
    </header>
    );
}

export default Header;