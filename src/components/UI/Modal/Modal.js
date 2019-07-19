import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

const modal = ({ children, show, modalClosed }) => {
  return (
    <React.Fragment>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className="Modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default modal;
