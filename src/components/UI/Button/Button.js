import React from 'react';
import classnames from 'classnames';

import './Button.css';

const button = ({ children, clicked, btnType }) => (
  <button className={classnames('Button', btnType)} onClick={clicked}>
    {children}
  </button>
);

export default button;
