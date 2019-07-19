import React, { Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  componentDidUpdate() {
    console.log('[Modal] DidUpdate');
  }
  render() {
    const { children, show, modalClosed } = this.props;
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
  }
}

export default Modal;
