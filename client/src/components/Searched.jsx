import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Header,
  SearchBar,
  SearchInput,
  SearchSubmit,
  SearchIcon,
  Pagination,
} from '../styles/Searched.style';
import SearchResults from './SearchResults';
import { userInput, storeSearchResults } from '../actions/index';

const Searched = () => {
  const dispatch = useDispatch();
  const userStateInput = useSelector((state) => state.userInput);
  const searchResults = useSelector((state) => state.searchResults);

  const handleChange = (e) => {
    dispatch(userInput(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/search', {
      data: userStateInput,
    })
      .then((response) => {
        const { items } = response.data;
        dispatch(storeSearchResults(items));
      })
      .catch((error) => {
        throw new Error(error);
      });
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
      <SearchResults props={searchResults} />
      <Pagination>
        Page stuff goes here
      </Pagination>
    </Container>
  );
};

export default Searched;
