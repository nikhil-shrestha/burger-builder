import * as types from '../actions/types';
import { updateObject } from '../../shared/utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PURCHASE_INIT:
      return updateObject(state, {
        purchased: false
      });
    case types.PURCHASE_BURGER_START:
      return updateObject(state, {
        loading: true
      });
    case types.PURCHASE_BURGER_SUCCESS:
      const newOrder = updateObject(action.orderData, { id: action.orderId });
      return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
      });
    case types.PURCHASE_BURGER_FAIL:
      return updateObject(state, {
        loading: false
      });

    case types.FETCH_ORDERS_START:
      return updateObject(state, {
        loading: true
      });
    case types.FETCH_ORDERS_SUCCESS:
      return updateObject(state, {
        orders: action.orders,
        loading: false
      });
    case types.FETCH_ORDERS_FAIL:
      return updateObject(state, {
        loading: false
      });
    default:
      return state;
  }
};

export default reducer;
