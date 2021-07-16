const pageTokensReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PAGE_TOKENS':
      return action.payload;
    default:
      return state;
  }
};

export default pageTokensReducer;
