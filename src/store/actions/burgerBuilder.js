import axios from '../../axios-orders';

import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED
} from './type';

export function addIngredient(payload) {
  return {
    type: ADD_INGREDIENT,
    payload
  };
}

export function removeIngredient(payload) {
  return {
    type: REMOVE_INGREDIENT,
    payload
  };
}

export function setIngridient(payload) {
  return {
    type: SET_INGREDIENTS,
    payload
  };
}

export function fetchIngridientsFailed() {
  return {
    type: FETCH_INGREDIENTS_FAILED
  };
}

export function initIngridients() {
  return dispatch => {
    axios
      .get('/ingredients.json')
      .then(res => dispatch(setIngridient(res.data)))
      .catch(err => dispatch(fetchIngridientsFailed()));
  };
}
