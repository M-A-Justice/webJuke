/* eslint-disable arrow-body-style */
export const userInput = (data) => {
  return {
    type: 'INPUT',
    payload: data,
  };
};

export const initSearch = () => {
  return {
    type: 'INIT_SEARCH',
  };
};

export const storeSearchResults = (data) => {
  return {
    type: 'SEARCH_RESULTS',
    payload: data,
  };
};

export const showModal = () => {
  return {
    type: 'SHOW_MODAL',
  };
};

export const addToQueue = (data) => {
  return {
    type: 'ADD_TO_QUEUE',
    payload: data,
  };
};

// export const storePageTokens = (data) => {
//   return {
//     type: 'PAGE_TOKENS',
//     payload: data,
//   };
// };
