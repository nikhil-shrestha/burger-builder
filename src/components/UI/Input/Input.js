import React from 'react';
import classnames from 'classnames';

import './Input.css';

const input = ({
  elementType,
  elementConfig,
  value,
  name,
  changed,
  invalid,
  shouldValidate,
  touched
}) => {
  let inputElement = null;

  const inputClasses = classnames('InputElement', {
    Invalid: invalid && shouldValidate && touched
  });

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses}
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select className={inputClasses} value={value} onChange={changed}>
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
