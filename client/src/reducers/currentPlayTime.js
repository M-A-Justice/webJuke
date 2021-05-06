const currentTimeReducer = (state = 0, action) => {
  switch (action.type) {
    case 'GET_CURRENT_TIME':
      return action.payload;
    default:
      return state;
  }
};

export default currentTimeReducer;
