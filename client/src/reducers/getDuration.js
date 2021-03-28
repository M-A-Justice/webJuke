const getDurationReducer = (state = 0, action) => {
  switch (action.type) {
    case 'GET_DURATION':
      return action.payload;
    default:
      return state;
  }
};

export default getDurationReducer;
