import React from 'react';
import Navbar from './components/Navbar.jsx';
import CartContainer from './components/CartContainer.jsx';
import cartItems from './data/cart-items.js';

// const Greeting = import.meta.env.VITE_GREETING ;

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
