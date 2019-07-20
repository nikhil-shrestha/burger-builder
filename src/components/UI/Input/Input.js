import React from 'react';

import './Input.css';

const input = ({ elementType, elementConfig, value, name, changed }) => {
  let inputElement = null;
  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className="InputElement"
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className="InputElement"
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select className="InputElement" value={value} onChange={changed}>
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
      <label className="Label" />
      {inputElement}
    </div>
  );
};

export default input;
