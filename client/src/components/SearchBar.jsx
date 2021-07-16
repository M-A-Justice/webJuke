/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  initSearch,
  storeSearchResults,
  userInput,
  activeSearch,
  storePageTokens,
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
  const queue = useSelector((state) => state.queue);

  const placeholderContent = ['Nothing is playing! Play some tunes!', 'Search...'];

  const handleChange = (e) => {
    dispatch(userInput(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.children[0];
    if (input.value === undefined) {
      return;
    }
    axios.post('/search', {
      data: userStateInput,
    })
      .then((response) => {
        const { items, prevPageToken, nextPageToken } = response.data;
        const tokens = {
          prevPageToken,
          nextPageToken,
        };
        dispatch(storeSearchResults(items));
        dispatch(storePageTokens(tokens));
        if (init === false) {
          dispatch(initSearch());
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
    // fix this to allow users to search again after they have
    // been presented with search results
    // likely fix, create a selected boolean in state to determine whether a user has selected
    // an item from the results
    input.value = '';
    dispatch(userInput(''));
    if (queue.length > 0) {
      dispatch(activeSearch());
    }
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
