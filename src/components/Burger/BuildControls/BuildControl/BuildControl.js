import React from 'react';

import './BuildControl.css';

const buildControl = ({ label, added }) => {
  return (
    <div className="BuildControl">
      <div className="Label">{label}</div>
      <button className="Less">Less</button>
      <button className="More" onClick={added}>
        More
      </button>
    </div>
  );
};

export default buildControl;
