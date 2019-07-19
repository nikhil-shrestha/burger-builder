import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import './Layout.css';

const layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />

      <main className="Content">{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
