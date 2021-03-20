import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  searching,
  input,
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
  const userInput = useSelector((state) => state.input);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/search', {
      data: userInput,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
    dispatch(searching());
  };

  const handleChange = (e) => {
    dispatch(input(e.target.value));
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
