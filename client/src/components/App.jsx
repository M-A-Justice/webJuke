/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../styles/App.style';
import NoDisplay from '../styles/NoDisplay.style';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Pagination from './Pagination';
import Player from './Player';
import PlayerInfo from './PlayerInfo';
import PlayerControls from './PlayerControls';
// import {
//   isActive,
//   activeSearch,
// } from '../actions/index';

const App = () => {
  const searchResults = useSelector((state) => state.searchResults);
  const init = useSelector((state) => state.initSearch);
  const activeQueue = useSelector((state) => state.isActive);
  const activelySearching = useSelector((state) => state.activeSearch);

  const displayPlayer = activeQueue && !activelySearching;

  // PROBLEM: Allow user to search while music is still playing in the background

  // Possible answer: Refactor search bar styling to change based on props
  // This solution will allow every module on the page to be swapped easily

  // if queues length is greater than 0
  // set playing in state to true
  // if playing and not actively searching display the player and player info

  return (
    <Container init={init}>
      <SearchBar />
      {displayPlayer ? <PlayerInfo /> : <SearchResults props={searchResults} />}
      {displayPlayer ? <PlayerControls /> : <Pagination />}
      {activeQueue ? <Player /> : <NoDisplay />}
    </Container>
  );
};

export default App;
