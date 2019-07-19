import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = ({ ingredientAdded, ingredientRemoved, disabled }) => {
  return (
    <div className="BuildControls">
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
    </div>
  );
};

export default buildControls;
