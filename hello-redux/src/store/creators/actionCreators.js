import * as actionTypes from '../actions/actionTypes';

export const incrementCounter = () => {
  return {
    type: actionTypes.INCRE,
  };
};

export const movieLoaded = (movies) => {
  return {
    type: actionTypes.MOVIE_LOADED,
    payload: movies,
  };
};

export const incrementCart = () => {
  return {
    type: actionTypes.ADD_CART,
  };
};
