/* eslint-disable arrow-body-style */
export const userInput = (data) => {
  return {
    type: 'INPUT',
    payload: data,
  };
};

export const searching = () => {
  return {
    type: 'SEARCHING',
  };
};

export const storeSearchResults = (data) => {
  return {
    type: 'SEARCH_RESULTS',
    payload: data,
  };
};
