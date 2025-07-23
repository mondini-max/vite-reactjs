import React from 'react';
import CartItem from './CartItem.jsx';

const CartContainer = ({ cart = [] }) => {
  return (
    <section className='cart'>
      <header>
        <h2>Your Cart</h2>
      </header>
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            Total <span>$0.00</span>
          </h4>
        </div>
        <button className='btn clear-btn'>Clear Cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
