import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerToggleHandler = () =>
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });

  sideDrawerCloseHandler = () => this.setState({ showSideDrawer: false });

  render() {
    return (
      <React.Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
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
