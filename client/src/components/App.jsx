import React from 'react';
import { useSelector } from 'react-redux';
import LandingPage from './LandingPage';
import Searched from './Searched';

const App = () => {
  const searching = useSelector((state) => state.searching);

  if (!searching) {
    return (
      <LandingPage />
    );
  }
  return (
    <Searched />
  );
};

export default App;
