import React from 'react';
import classnames from 'classnames';

const button = ({ children, clicked, btnType }) => (
  <button
    className={classnames('Button', {
      Success: btnType === 'Success',
      Danger: btnType === 'Danger'
    })}
    onClick={clicked}
  >
    {children}
  </button>
);

export default button;
