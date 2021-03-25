const initSearchReducer = (state = false, action) => {
  switch (action.type) {
    case 'INIT_SEARCH':
      return !state;
    default:
      return state;
  }
};

export default initSearchReducer;
