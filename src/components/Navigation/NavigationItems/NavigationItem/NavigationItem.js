import React from 'react';
import classnames from 'classnames';

import './NavigationItem.css';

const navigationItem = ({ children, link, active }) => (
  <li className="NavigationItem">
    <a
      href={link}
      className={classnames({
        active: active
      })}
    >
      {children}
    </a>
  </li>
);

export default navigationItem;
