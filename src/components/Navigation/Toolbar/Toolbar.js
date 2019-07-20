import React from 'react';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import './Toolbar.css';

const toolbar = ({ drawerToggleClicked }) => (
  <header className="Toolbar">
    <DrawerToggle clicked={drawerToggleClicked} />
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
