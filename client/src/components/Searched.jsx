import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Header,
  SearchBar,
  SearchInput,
  SearchSubmit,
  SearchIcon,
  SearchResults,
  Pagination,
} from '../styles/Searched.style';
import { userInput } from '../actions/index';

const Searched = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);

  const handleChange = (e) => {
    dispatch(userInput(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Header>
        <SearchBar onSubmit={handleSubmit}>
          <SearchInput type="text" onChange={handleChange} placeholder="Search..." />
          <SearchSubmit>
            <SearchIcon onClick={handleSubmit} />
          </SearchSubmit>
        </SearchBar>
      </Header>
      <SearchResults>
        Stuff goes here
      </SearchResults>
      <Pagination>
        Page stuff goes here
      </Pagination>
    </Container>
  );
};

export default Searched;
