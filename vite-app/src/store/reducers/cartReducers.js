import cartItems from '../../data/cart-items.js';
import { INCREASE, DECREASE, RESET, CLEAR_CART } from '../types/cartTypes.js';

const initialState = {
  cart: cartItems,
  total: 130.99,
  amount: 5,
};

export const cartReducers = (state = initialState, action) => {
  if (action.type === INCREASE) {
    console.log('increase action dispatched', state, action);
    return { ...state, amount: state.amount + 1 };
  }
  if (action.type === DECREASE) {
    console.log('decrease action dispatched', state, action);
    return { ...state, amount: state.amount - 1 };
  }
  if (state.amount <= 0 && action.type === RESET) {
    console.log('reset action dispatched', state, action);
    return { ...state, amount: 0 };
  }

  if (action.type === CLEAR_CART) {
    console.log('clear cart action dispatched', state, action);
    return { ...state, cart: [], total: 0, amount: 0 };
  }
  // Handle other action types as needed

  return state;
};
