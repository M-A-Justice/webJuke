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

const App = () => {
  const searchResults = useSelector((state) => state.searchResults);
  const init = useSelector((state) => state.initSearch);
  const activeQueue = useSelector((state) => state.isActive);
  const activelySearching = useSelector((state) => state.activeSearch);

  const displayPlayerInfo = activeQueue && !activelySearching;

  return (
    <Container init={init}>
      <SearchBar />
      {displayPlayerInfo ? <PlayerInfo /> : <SearchResults searchResults={searchResults} />}
      {displayPlayerInfo ? <PlayerControls /> : <Pagination />}
      {activeQueue ? <Player /> : <NoDisplay />}
    </Container>
  );
};

export default App;
