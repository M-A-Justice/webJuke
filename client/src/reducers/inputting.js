const inputReducer = (state = '', action) => {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        userInput: action.payload,
      };
    default:
      return state;
  }
};

export default inputReducer;
