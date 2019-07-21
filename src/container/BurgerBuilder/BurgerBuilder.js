import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios-orders';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {
  addIngredient,
  removeIngredient,
  initIngridients,
  purchaseInit,
  setAuthRedirectPath
} from '../../store/actions/';

class BurgerBuilder extends Component {
  state = {
    purchasing: false
  };

  componentDidMount() {
    this.props.onInitIngridient();
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return sum > 0;
  }

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
      return;
    }
    this.props.onSetAuthRedirectPath('/checkout');
    this.props.history.push('/auth');
  };

  purchaseCancelHandler = () => this.setState({ purchasing: false });

  purchaseContinueHandler = () => {
    this.props.onPurchaseInit();
    this.props.history.push('/checkout');
  };

  render() {
    const { ings, price, error, isAuthenticated } = this.props;
    const { purchasing } = this.state;
    const disabledInfo = {
      ...ings
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = error ? <p>Ingredients cannot be loaded</p> : <Spinner />;

    if (ings !== null) {
      burger = (
        <React.Fragment>
          <Burger ingredients={ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchaseable={this.updatePurchaseState(ings)}
            ordered={this.purchaseHandler}
            price={price}
            isAuth={isAuthenticated}
          />
        </React.Fragment>
      );

      orderSummary = (
        <OrderSummary
          ingredients={ings}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={price}
        />
      );
    }

    return (
      <React.Fragment>
        <Modal show={purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName =>
      dispatch(addIngredient({ ingredientName: ingName })),
    onIngredientRemoved: ingName =>
      dispatch(removeIngredient({ ingredientName: ingName })),
    onInitIngridient: () => dispatch(initIngridients()),
    onPurchaseInit: () => dispatch(purchaseInit()),
    onSetAuthRedirectPath: path => dispatch(setAuthRedirectPath(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
