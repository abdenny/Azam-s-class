import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';

const DisplayCounter = (props) => {
  return (
    <>
      <h1>{props.ctr}</h1>
      <MovieList />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

export default connect(mapStateToProps)(DisplayCounter);
