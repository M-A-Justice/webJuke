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

export const emptySearchResults = () => {
  return {
    type: 'REMOVE_RESULTS',
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

export const isPlaying = () => {
  return {
    type: 'IS_PLAYING',
  };
};

export const isActive = () => {
  return {
    type: 'IS_ACTIVE',
  };
};

export const activeSearch = () => {
  return {
    type: 'ACTIVE_SEARCH',
  };
};

export const displayQueue = () => {
  return {
    type: 'DISPLAY_QUEUE',
  };
};

export const getDuration = (data) => {
  return {
    type: 'GET_DURATION',
    payload: data,
  };
};

export const removeFromQueue = () => {
  return {
    type: 'REMOVE_FROM_QUEUE',
  };
};

// export const storePageTokens = (data) => {
//   return {
//     type: 'PAGE_TOKENS',
//     payload: data,
//   };
// };
