import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = ({ height }) => {
  return (
    <div className="Logo" style={{ height: height }}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default logo;
