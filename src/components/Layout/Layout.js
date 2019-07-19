import React from 'react';

import './Layout.css';

const layout = props => {
  return (
    <React.Fragment>
      <div>Toolbar, Sidedrawer, Backdrop</div>

      <main className="Content">{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
