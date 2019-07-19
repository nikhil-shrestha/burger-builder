import React from 'react';
import classnames from 'classnames';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import './SideDrawer.css';

const sideDrawer = ({ open, closed }) => {
  let attachedClasses = classnames('SideDrawer', 'Close');
  if (open) {
    attachedClasses = classnames('SideDrawer', 'Open');
  }
  return (
    <React.Fragment>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
