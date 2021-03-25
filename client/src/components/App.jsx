/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../styles/App.style';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Pagination from './Pagination';

const App = () => {
  const searchResults = useSelector((state) => state.searchResults);
  const init = useSelector((state) => state.initSearch);

  // PROBLEM: Allow user to search while music is still playing in the background

  // Possible answer: Refactor search bar styling to change based on props
  // This solution will allow every module on the page to be swapped easily

  // if queues length is greater than 0
  // set playing in state to true

  return (
    <Container init={init}>
      <SearchBar />
      <SearchResults props={searchResults} />
      <Pagination />
    </Container>
  );
};

export default App;
