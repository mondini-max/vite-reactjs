import React from 'react';
import Navbar from './components/Navbar.jsx';
import CartContainer from './components/CartContainer.jsx';

// const Greeting = import.meta.env.VITE_GREETING ;

function App() {
  return (
    <>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </>
  );
}

export default App;
