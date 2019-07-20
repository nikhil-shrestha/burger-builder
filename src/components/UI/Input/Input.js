import React from 'react';

import './Input.css';

const input = ({ elementType, elementConfig, value, name, label }) => {
  let inputElement = null;
  switch (elementType) {
    case 'input':
      inputElement = (
        <input className="InputElement" {...elementConfig} value={value} />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea className="InputElement" {...elementConfig} value={value} />
      );
      break;
    default:
      inputElement = (
        <input className="InputElement" {...elementConfig} value={value} />
      );
  }
  return (
    <div className="Input">
      <label htmlFor={name} className="Label">
        {label}
      </label>
      {inputElement}
    </div>
  );
};

export default input;
