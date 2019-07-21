import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED
} from '../actions/type';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      const updatedIngredient = {
        [action.payload.ingredientName]:
          state.ingredients[action.payload.ingredientName] + 1
      };
      const updatedIngredients = updateObject(
        state.ingredients,
        updatedIngredient
      );
      const updatedState = {
        ingredients: updatedIngredients,
        totalPrice:
          state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName]
      };
      return updateObject(state, updatedState);
    case REMOVE_INGREDIENT:
      const updatedIng = {
        [action.payload.ingredientName]:
          state.ingredients[action.payload.ingredientName] - 1
      };
      const updatedIngs = updateObject(state.ingredients, updatedIng);
      const updatedSt = {
        ingredients: updatedIngs,
        totalPrice:
          state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName]
      };
      return updateObject(state, updatedSt);
    case SET_INGREDIENTS:
      return updateObject(state, {
        ingredients: {
          salad: action.payload.salad,
          bacon: action.payload.bacon,
          cheese: action.payload.cheese,
          meat: action.payload.meat
        },
        totalPrice: 4,
        error: false
      });
    case FETCH_INGREDIENTS_FAILED:
      return updateObject(state, {
        error: true
      });
    default:
      return state;
  }
};

export default reducer;
