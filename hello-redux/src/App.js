import React from 'react';
import { connect } from 'react-redux';
import DisplayCounter from './components/DisplayCounter';
function App(props) {
  const handleIncrement = () => {
    props.onIncrement();
  };

  return (
    <div>
      <h1>{props.ctr}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <DisplayCounter />
    </div>
  );
}

// Map Global State to Local Props
const mapStateToProps = (state) => {
  return {
    // ctr is a local propery and state.counter is the global redux state
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: 'INCRE' }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
