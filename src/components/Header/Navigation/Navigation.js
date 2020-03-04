import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../redux/actions/types';
import classes from './Navigation.module.scss';

const Navigation = () => (
  <div>
    <ul className={classes.nav_list}>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGNING_IN}>Sign In</Link>
      </li>
    </ul>
  </div>
);
export default Navigation;