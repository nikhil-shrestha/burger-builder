import axios from '../../axios-orders';

import { PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAIL } from './type';

export function purchaseBurgerSuccess(id, orderData) {
  return {
    type: PURCHASE_BURGER_SUCCESS,
    payload: {
      id,
      orderData
    }
  };
}

export function purchaseBurgerFail(error) {
  return {
    type: PURCHASE_BURGER_FAIL,
    payload: error
  };
}

export function purchaseBurgerStart(orderData) {
  return dispatch => {
    axios
      .post('/orders.json', orderData)
      .then(res => dispatch(purchaseBurgerSuccess(res.data)))
      .catch(err => dispatch(purchaseBurgerFail(err)));
  };
}
