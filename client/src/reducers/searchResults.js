const searchResultsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_RESULTS':
      return [...state, ...action.payload];
    case 'REMOVE_RESULTS':
      return [];
    default:
      return state;
  }
};

export default searchResultsReducer;
