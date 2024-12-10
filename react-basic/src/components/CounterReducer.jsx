// this contain the reducer function for the counter

const initialState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": //this case is for incrementing the counter
      return { count: state.count + 1 };
    case "DECREMENT":// this case is for decrementing the counter
      return { count: state.count - 1 };
    case "INCREMENT_BY_AMOUNT":// this case for incrementing the counter by the number entered in the input field
      return { count: state.count + action.payload };

    case "DECREMENT_BY_AMOUNT":// this case for decrementing the counter by the number entered in the input field
      return { count: state.count - action.payload };

    default:
      return state;
  }
};

export { counterReducer, initialState };
