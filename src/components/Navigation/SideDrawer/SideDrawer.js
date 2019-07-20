import React from 'react';
import classnames from 'classnames';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import './SideDrawer.css';

const sideDrawer = ({ open, closed }) => {
  return (
    <React.Fragment>
      <Backdrop show={open} clicked={closed} />
      <div
        className={classnames('SideDrawer', {
          Open: open,
          Close: !open
        })}
      >
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
