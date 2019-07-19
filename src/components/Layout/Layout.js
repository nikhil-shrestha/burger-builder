import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerCloseHandler = () => this.setState({ showSideDrawer: false });

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className="Content">{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
