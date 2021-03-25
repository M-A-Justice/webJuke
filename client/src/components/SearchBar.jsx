/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  initSearch,
  storeSearchResults,
  userInput,
} from '../actions/index';
import {
  Header,
  SearchForm,
  SearchInput,
  SearchSubmit,
  SearchIcon,
} from '../styles/SearchBar.style';
import Modal from './Modal';

const SearchBar = () => {
  const dispatch = useDispatch();
  const userStateInput = useSelector((state) => state.userInput);
  const init = useSelector((state) => state.initSearch);

  const placeholderContent = ['Nothing is playing! Play some tunes!', 'Search...'];

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
        if (init === false) {
          dispatch(initSearch());
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <Header init={init}>
      <SearchForm init={init} onSubmit={handleSubmit}>
        <SearchInput init={init} type="text" onChange={handleChange} placeholder={init === false ? placeholderContent[0] : placeholderContent[1]} />
        <SearchSubmit>
          <SearchIcon onClick={handleSubmit} />
        </SearchSubmit>
      </SearchForm>
      <Modal />
    </Header>
  );
};

export default SearchBar;
