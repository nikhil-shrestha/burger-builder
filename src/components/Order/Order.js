import React from 'react';

import './Order.css';

export default function Order({ ingredients, price }) {
  const transformedIngredients = [];

  for (let ingredientName in ingredients) {
    transformedIngredients.push({
      name: ingredientName,
      amount: ingredients[ingredientName]
    });
  }

  const ingredientOutput = transformedIngredients.map(ig => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc'
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className="Order">
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {parseFloat(price).toFixed(2)}</strong>
      </p>
    </div>
  );
}
