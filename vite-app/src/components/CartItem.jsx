import React from 'react';
import { connect } from 'react-redux';
import { REMOVE, INCREASE, DECREASE } from '../store/types/cartTypes.js';
import { removeItemAction } from '../store/actions/cartActions.js';

const CartItem = ({
  img,
  title,
  price,
  amount,
  remove,
  increase,
  decrease,
}) => {
  return (
    <div className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => remove()}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => increase()}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => decrease()}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log('mapDispatchToProps ownProps called', { ownProps });
  const { id, amount } = ownProps;

  const remove = () => dispatch(removeItemAction(id));
  const increase = () => dispatch({ type: INCREASE, payload: { id, amount } });
  const decrease = () => {
    if (amount <= 1) {
      console.log('amount is 1, removing item');
      return remove();
    } else {
      dispatch({ type: DECREASE, payload: { id, amount } });
    }
  };
  return { remove, increase, decrease };
};

export default connect(null, mapDispatchToProps)(CartItem);
