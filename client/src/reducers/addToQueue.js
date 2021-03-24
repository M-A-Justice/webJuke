const addToQueue = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_QUEUE':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default addToQueue;
