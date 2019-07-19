import React from 'react';

function orderSummary({ ingredients }) {
  const ingredientSummary = Object.keys(ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {ingredients[igKey]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkou?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </React.Fragment>
  );
}

export default orderSummary;
