import * as types from './types';

export function addIngredient(payload) {
  return {
    type: types.ADD_INGREDIENT,
    payload
  };
}

export function removeIngredient(payload) {
  return {
    type: types.REMOVE_INGREDIENT,
    payload
  };
}

export function setIngridient(payload) {
  return {
    type: types.SET_INGREDIENTS,
    payload
  };
}

export function fetchIngridientsFailed() {
  return {
    type: types.FETCH_INGREDIENTS_FAILED
  };
}

export function initIngridients() {
  return {
    type: types.INIT_INGREDIENTS
  };
}
