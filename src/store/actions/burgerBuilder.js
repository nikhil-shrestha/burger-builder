import { ADD_INGREDIENT, REMOVE_INGREDIENT } from './type';

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
