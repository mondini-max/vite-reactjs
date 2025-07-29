import cartItems from '../../data/cart-items.js';
import {
  INCREASE,
  DECREASE,
  GET_TOTALS,
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

    case DECREASE: {
      console.log('decrease action dispatched', state, action);
      let tempsNewCart = [];
      tempsNewCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if (item.amount >= 1) {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      });

      return {
        ...state,
        cart: tempsNewCart,
      };
    }

    case GET_TOTALS: {
      console.log('get totals action dispatched', state, action);
      const { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          // console.log('calculating totals for item', cartItem);
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          // console.log('current cartTotal', cartTotal);
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      // console.log('calculated totals', { total, amount });

      return { ...state, total: parseFloat(total.toFixed(2)), amount };
    }

    case REMOVE: {
      console.log('remove action disptached ', state, action.payload);
      const id = action.payload.id;
      const newCart = state.cart.filter((cartItem) => cartItem.id !== id);
      return {
        ...state,
        cart: newCart,
      };
    }

    case CLEAR_CART:
      console.log('clear cart action dispatched', state, action);
      return { ...state, cart: [], total: 0, amount: 0 };
    default:
      return state;
  }
};
