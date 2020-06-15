// initialize the global state values
const initialState = {
  counter: 99,
  name: 'John Doe',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'INCRE') {
    // increment the counter
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  // returns the updated global state
  return state;
};

export default reducer;
