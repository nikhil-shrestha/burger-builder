import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = ({ children, link, exact }) => (
  <li className="NavigationItem">
    <NavLink to={link} exact={exact}>
      {children}
    </NavLink>
  </li>
);

export default navigationItem;
