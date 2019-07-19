import React from 'react';

import './BuildControl.css';

const buildControl = ({ label }) => {
  return (
    <div className="BuildControl">
      <div className="Label">{label}</div>
      <button className="Less">Less</button>
      <button className="More">More</button>
    </div>
  );
};

export default buildControl;
