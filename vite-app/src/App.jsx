import React from 'react';
import Navbar from './components/Navbar.jsx';
import CartContainer from './components/CartContainer.jsx';
import cartItems from './data/cart-items.js';

// const Greeting = import.meta.env.VITE_GREETING ;

import { createStore } from 'redux';
import { cartReducers } from './store/reducers/cartReducers.js';

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const store = createStore(cartReducers, initialState);

console.log(store.getState());

function App() {
  return (
    <>
      <main>
        <Navbar />
        <CartContainer cart={cartItems} />
      </main>
    </>
  );
}

export default App;
