const isActiveReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_ACTIVE':
      return !state;
    default:
      return state;
  }
};

export default isActiveReducer;
