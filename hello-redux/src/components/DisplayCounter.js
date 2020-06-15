import React from 'react';
import { connect } from 'react-redux';

const DisplayCounter = (props) => {
  return (
    <>
      <h1>{props.ctr}</h1>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

export default connect(mapStateToProps)(DisplayCounter);
