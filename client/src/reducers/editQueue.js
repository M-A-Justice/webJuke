const editQueue = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_QUEUE':
      return [...state, action.payload];
    case 'REMOVE_FROM_QUEUE':
      return state.slice(1);
    default:
      return state;
  }
};

export default editQueue;
