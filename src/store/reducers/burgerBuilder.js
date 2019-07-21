import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED
} from '../actions/types';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const addIngridient = (state, action) => {
  const updatedIngredient = {
    [action.payload.ingredientName]:
      state.ingredients[action.payload.ingredientName] + 1
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice:
      state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName],
    building: true
  };
  return updateObject(state, updatedState);
};

const removeIngridient = (state, action) => {
  const updatedIng = {
    [action.payload.ingredientName]:
      state.ingredients[action.payload.ingredientName] - 1
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice:
      state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName],
    building: true
  };
  return updateObject(state, updatedSt);
};

const setIngridients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.payload.salad,
      bacon: action.payload.bacon,
      cheese: action.payload.cheese,
      meat: action.payload.meat
    },
    totalPrice: 4,
    error: false,
    building: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return addIngridient(state, action);

    case REMOVE_INGREDIENT:
      return removeIngridient(state, action);

    case SET_INGREDIENTS:
      return setIngridients(state, action);

    case FETCH_INGREDIENTS_FAILED:
      return updateObject(state, {
        error: true
      });
    default:
      return state;
  }
};

export default reducer;
