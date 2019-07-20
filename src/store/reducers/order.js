import {
  PURCHASE_INIT,
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
  FETCH_ORDER_START,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAIL
} from '../actions/type';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      };
    case PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
    case PURCHASE_BURGER_SUCCESS:
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(action.payload)
      };
    case PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false
      };

    case FETCH_ORDER_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        loading: false
      };
    case FETCH_ORDER_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
