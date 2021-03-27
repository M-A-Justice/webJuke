const isPlayingReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_PLAYING':
      return !state;
    default:
      return state;
  }
};

export default isPlayingReducer;
