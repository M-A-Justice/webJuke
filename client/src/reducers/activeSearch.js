const activeSearchReducer = (state = false, action) => {
  switch (action.type) {
    case 'ACTIVE_SEARCH':
      return !state;
    default:
      return state;
  }
};

export default activeSearchReducer;
