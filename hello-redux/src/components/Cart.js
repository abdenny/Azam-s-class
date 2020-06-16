import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/creators/actionCreators';

const Cart = (props) => {
  const [cart, setcart] = useState(0);

  let addToCart = () => {
    setcart(cart + 1);
    props.onIncrementCart();
    console.log(props);
  };
  return (
    <>
      <h3>Cart from local state</h3>
      {cart}
      <h3>Cart from Redux</h3>
      {props.localCart}
      <button onClick={addToCart}>Add to cart</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    localCart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCart: () => dispatch(actionCreators.incrementCart()),
    // onMovieLoaded: (movies) => dispatch({type: 'MOVIES_LOADED', movies: movies})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
