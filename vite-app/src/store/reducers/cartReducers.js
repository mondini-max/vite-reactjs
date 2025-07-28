import cartItems from '../../data/cart-items.js';
import {
  INCREASE,
  DECREASE,
  RESET,
  CLEAR_CART,
  REMOVE,
} from '../types/cartTypes.js';

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

export const cartReducers = (state = initialState, action) => {
  // if (action.type === INCREASE) {
  //   console.log('increase action dispatched', state, action);
  //   return { ...state, amount: state.amount + 1 };
  // }
  // if (action.type === DECREASE) {
  //   console.log('decrease action dispatched', state, action);
  //   return { ...state, amount: state.amount - 1 };
  // }
  // if (state.amount <= 0 && action.type === RESET) {
  //   console.log('reset action dispatched', state, action);
  //   return { ...state, amount: 0 };
  // }

  // if (action.type === CLEAR_CART) {
  //   console.log('clear cart action dispatched', state, action);
  //   return { ...state, cart: [], total: 0, amount: 0 };
  // }
  switch (action.type) {
    case INCREASE:
      console.log('increase action dispatched', state, action);

      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        }),
      };

    case DECREASE:
      console.log('decrease action dispatched', state, action);
      return { ...state, amount: state.amount - 1 };
    case REMOVE:
      console.log('remove action dispatched', state, action.payload.id);
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case CLEAR_CART:
      console.log('clear cart action dispatched', state, action);
      return { ...state, cart: [], total: 0, amount: 0 };
    default:
      return state;
  }
};
