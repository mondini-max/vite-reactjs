import cartItems from '../../data/cart-items.js';
import { cartTypes } from '../types/cartTypes.js';

const initialState = {
  cart: cartItems,
  total: 130.99,
  amount: 5,
};

export const cartReducers = (state = initialState, action) => {
  if (action.type === cartTypes.INCREASE) {
    console.log('increase action dispatched', state, action);
    return { ...state, amount: state.amount + 1 };
  }
  if (action.type === cartTypes.DECREASE) {
    console.log('decrease action dispatched', state, action);
    return { ...state, amount: state.amount - 1 };
  }
  if (state.amount <= 0 && action.type === cartTypes.RESET) {
    console.log('reset action dispatched', state, action);
    return { ...state, amount: 0 };
  }
  // Handle other action types as needed

  return state;
};
