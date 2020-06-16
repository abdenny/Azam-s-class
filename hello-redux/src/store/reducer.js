/* eslint-disable default-case */

import * as actionTypes from '../store/actions/actionTypes';

// initial global state
const initialState = {
  counter: 99,
  movies: [],
  username: '',
  tokenId: '',
  cart: 0,
};

const reducer = (state = initialState, action) => {
  // switch
  switch (action.type) {
    case actionTypes.INCRE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.ADD_CART:
      return {
        ...state,
        cart: state.cart + 1,
      };
    case actionTypes.MOVIE_ADDED:
      return {
        ...state,
        movies: state.movies.concat(action.name),
      };
    case actionTypes.MOVIE_LOADED:
      return {
        ...state,
        movies: action.payload,
      };
  }

  return state;
};

export default reducer;
