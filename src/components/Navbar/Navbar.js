import React from 'react';
import classes from  './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.navItem}><NavLink to="/profile">Profile</NavLink></div>
            <div className={classes.navItem}><NavLink to="/dialogs">Messages</NavLink></div>
            <div className={classes.navItem}><NavLink to="/users">Users</NavLink></div>
        </nav>
    );
}
