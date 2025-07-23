import React from 'react';

const CartItem = ({ img, title, price, amount }) => {
  return (
    <div className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn'>remove</button>
      </div>
      <button className='amount-btn'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm5 11H5v-2h10v2z' />
        </svg>
        <span className='amount'>{amount}</span>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M10 20c5.52 0 10-4.48 10-10S15.52 0 10 0s-10 4.48-10 10s4.48 10 10 10zm-5-9h10v2H5v-2z' />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
