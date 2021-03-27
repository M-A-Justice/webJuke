const displayQueueReducer = (state = false, action) => {
  switch (action.type) {
    case 'DISPLAY_QUEUE':
      return !state;
    default:
      return state;
  }
};

export default displayQueueReducer;
