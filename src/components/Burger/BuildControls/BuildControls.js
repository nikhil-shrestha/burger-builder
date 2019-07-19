import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
  purchaseable,
  ordered
}) => {
  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>{parseFloat(price).toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          type={ctrl.type}
          disabled={disabled[ctrl.type]}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
        />
      ))}
      <button
        className="OrderButton"
        onClick={ordered}
        disabled={!purchaseable}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
