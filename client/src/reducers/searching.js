const searchingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SEARCHING':
      return !state;
    default:
      return state;
  }
};

export default searchingReducer;
