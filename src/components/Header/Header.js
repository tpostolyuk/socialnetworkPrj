import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './Header.module.css';
import logo from './logo.png';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import { fetchSignOut } from '../../redux/actions/authAction';

export const Header = () => {
  const dispatch = useDispatch();
  
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
      <NavLink to="/auth">
        <Button
          onClick={() => dispatch(fetchSignOut())}
          variant="contained"
          color="primary"
          >Log Out
        </Button>
      </NavLink> 
    </header>
  )
}

export default Header;