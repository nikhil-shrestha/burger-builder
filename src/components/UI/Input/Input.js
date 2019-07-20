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
    case 'select':
      inputElement = (
        <select className="InputElement" value={value}>
          {elementConfig.options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.displayValue}
            </option>
          ))}
        </select>
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
