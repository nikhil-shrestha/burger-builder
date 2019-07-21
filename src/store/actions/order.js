import axios from '../../axios-orders';

import {
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAIL,
  FETCH_ORDER_START
} from './types';

export function purchaseBurgerSuccess(id, orderData) {
  return {
    type: PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData
  };
}

export function purchaseBurgerFail(error) {
  return {
    type: PURCHASE_BURGER_FAIL,
    payload: error
  };
}

export function purchaseBurgerStart() {
  return {
    type: PURCHASE_BURGER_START
  };
}

export function purchaseBurger(orderData) {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json', orderData)
      .then(res => dispatch(purchaseBurgerSuccess(res.data.name, orderData)))
      .catch(err => dispatch(purchaseBurgerFail(err)));
  };
}

export function purchaseInit(orderData) {
  return {
    type: PURCHASE_INIT
  };
}

export function fetchOrderSuccess(orders) {
  return {
    type: FETCH_ORDER_SUCCESS,
    orders
  };
}

export function fetchOrderFail(error) {
  return {
    type: FETCH_ORDER_FAIL,
    error
  };
}

export function fetchOrderStart() {
  return {
    type: FETCH_ORDER_START
  };
}

export function fetchOrders() {
  return dispatch => {
    dispatch(fetchOrderStart());
    axios
      .get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrderSuccess(fetchedOrders));
      })
      .catch(err => dispatch(fetchOrderFail(err)));
  };
}
