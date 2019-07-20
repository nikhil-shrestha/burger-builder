import React from 'react';
import classnames from 'classnames';

import './Button.css';

const button = ({ children, clicked, btnType, disabled }) => (
  <button
    disabled={disabled}
    className={classnames('Button', btnType)}
    onClick={clicked}
  >
    {children}
  </button>
);

export default button;
