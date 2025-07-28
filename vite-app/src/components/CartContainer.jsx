import React from 'react';
import CartItem from './CartItem.jsx';
import { connect } from 'react-redux';
import { CLEAR_CART } from '../store/types/cartTypes.js';

const CartContainer = ({ cart = [], total, dispatch }) => {
  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>Your Cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
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
            Total <span>${total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => {
            console.log('Clear Cart button clicked');
            return dispatch({ type: CLEAR_CART });
          }}
        >
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { cart, total } = state;
  // console.log('stateToProps called', { cart });
  return { cart, total };
};

export default connect(mapStateToProps)(CartContainer);
