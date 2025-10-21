export const CounterReducer = (state, action) => {
  switch (action.type) {
    case "counter/increment": {
      return (state = action.payload);
    }

    default: {
      return state;
    }
  }
};