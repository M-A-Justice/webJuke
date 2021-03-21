import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  searching,
  userInput,
  storeSearchResults,
} from '../actions/index';
// import SearchIcon from '../styles/images/SearchIcon.png';
import {
  Container,
  SearchBar,
  SearchInput,
  SearchSubmit,
  SearchIcon,
} from '../styles/LandingPage.style';

const LandingPage = () => {
  const dispatch = useDispatch();
  const userStateInput = useSelector((state) => state.userInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/search', {
      data: userStateInput,
    })
      .then((response) => {
        // put response in state
        const { items } = response.data;
        dispatch(storeSearchResults(items));
        dispatch(searching());
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  const handleChange = (e) => {
    dispatch(userInput(e.target.value));
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit}>
        <SearchInput type="text" onChange={handleChange} placeholder="Nothing is playing! Play some tunes!" />
        <SearchSubmit type="submit">
          <SearchIcon name="submit" onClick={handleSubmit} />
        </SearchSubmit>
      </SearchBar>
    </Container>
  );
};

export default LandingPage;
