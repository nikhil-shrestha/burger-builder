import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = ({ children, link, active }) => (
  <li className="NavigationItem">
    <Link
      to={link}
      className={classnames({
        active: active
      })}
    >
      {children}
    </Link>
  </li>
);

export default navigationItem;
