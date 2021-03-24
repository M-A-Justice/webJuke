const showModalReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return !state;
    default:
      return state;
  }
};

export default showModalReducer;
