const pageTokensReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PAGE_TOKENS':
      return {
        ...state,
        pageTokens: action.payload,
      };
    default:
      return state;
  }
};

export default pageTokensReducer;
