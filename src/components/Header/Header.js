import React, { Component } from 'react';
import classes from './Header.module.css';
import logo from './logo.png';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import * as firebase from 'firebase';


class Header extends Component {
  render() {
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
        <NavLink to="/auth"><Button 
            variant="contained"
            color="primary"
            onClick={this.props.onAuthSignOut}
          >Log Out</Button>
        </NavLink> 
      </header>
      );
    }
  }

export default Header;