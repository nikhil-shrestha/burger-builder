import React, { Component } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // this could be a functional component, doesnt have to be a class
  componentDidUpdate() {
    console.log('[OrderSummary] DidUpdate');
  }
  render() {
    const {
      ingredients,
      purchaseCancelled,
      purchaseContinued,
      price
    } = this.props;

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
        <strong>Total Price: {price.toFixed(2)}</strong>
        <p>Continue to Checkou?</p>
        <Button btnType="Danger" clicked={purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={purchaseContinued}>
          CONTINUE
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
