import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios-orders';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../../store/actions';

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    // axios
    //   .get('/ingredients.json')
    //   .then(res => this.setState({ ingredients: res.data }))
    //   .catch(err => this.setState({ error: true }));
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

  purchaseHandler = () => this.setState({ purchasing: true });

  purchaseCancelHandler = () => this.setState({ purchasing: false });

  purchaseContinueHandler = () => this.props.history.push('/checkout');

  render() {
    const { ings, price } = this.props;
    const { purchasing, error } = this.state;
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
            price={price}
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchaseable={this.updatePurchaseState(ings)}
            ordered={this.purchaseHandler}
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

    if (this.state.loading) {
      orderSummary = <Spinner />;
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
    ings: state.ingredients,
    price: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName =>
      dispatch({ type: ADD_INGREDIENT, payload: { ingredientName: ingName } }),
    onIngredientRemoved: ingName =>
      dispatch({
        type: REMOVE_INGREDIENT,
        payload: { ingredientName: ingName }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
