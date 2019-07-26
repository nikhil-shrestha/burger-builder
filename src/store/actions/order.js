import * as types from './types';

export function purchaseBurgerSuccess(id, orderData) {
  return {
    type: types.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData
  };
}

export function purchaseBurgerFail(error) {
  return {
    type: types.PURCHASE_BURGER_FAIL,
    payload: error
  };
}

export function purchaseBurgerStart() {
  return {
    type: types.PURCHASE_BURGER_START
  };
}

export function purchaseBurger(orderData, token) {
  return {
    type: types.PURCHASE_BURGER,
    token,
    orderData
  };
}

export function purchaseInit(orderData) {
  return {
    type: types.PURCHASE_INIT
  };
}

export function fetchOrderSuccess(orders) {
  return {
    type: types.FETCH_ORDERS_SUCCESS,
    orders
  };
}

export function fetchOrderFail(error) {
  return {
    type: types.FETCH_ORDERS_FAIL,
    error
  };
}

export function fetchOrderStart() {
  return {
    type: types.FETCH_ORDERS_START
  };
}

export function fetchOrders(token, userId) {
  return {
    type: types.FETCH_ORDERS,
    token,
    userId
  };
}
