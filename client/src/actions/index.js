/* eslint-disable arrow-body-style */
export const input = (data) => {
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
