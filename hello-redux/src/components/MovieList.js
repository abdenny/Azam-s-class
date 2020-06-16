import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/creators/actionCreators';
import Cart from './Cart';

function MovieList(props) {
  useEffect(() => {
    // perform a fetch request
    fetch('http://www.omdbapi.com/?s=batman&apikey=564727fa')
      .then((response) => response.json())
      .then((result) => {
        let movies = result.Search;
        props.onMovieLoaded(movies);
      });
  }, []);

  const movieItems = props.movies.map((movie) => {
    return <li>{movie.Title}</li>;
  });

  return (
    <>
      <ul>{movieItems}</ul>
      <Cart />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMovieLoaded: (movies) => dispatch(actionCreators.movieLoaded(movies)),
    // onMovieLoaded: (movies) => dispatch({type: 'MOVIES_LOADED', movies: movies})
  };
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
