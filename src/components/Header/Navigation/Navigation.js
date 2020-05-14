import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../../redux/actions/types';
import classes from './Navigation.module.scss';
import { logOut } from '../../../redux/actions/authAction';
import { useDispatch } from 'react-redux';

export const Navigation = ({ isAuth }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul className={classes.nav_list}>
        <li>
          <NavLink to={ROUTES.HOME}>Home</NavLink>
        </li>
        <li>
          {isAuth ? <NavLink onClick={() => dispatch(logOut())} to='/login'>LogOut</NavLink> : ''}
        </li>
      </ul>
    </div>
  )
};
