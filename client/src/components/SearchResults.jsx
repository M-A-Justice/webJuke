/* eslint-disable react/prop-types */
import React from 'react';
import SearchResultItem from './SearchResultItem';
import SearchResultsList from '../styles/SearchResults.style';

const SearchResults = ({ props }) => {
  const { searchResults } = props;
  return (
    <SearchResultsList>
      {searchResults.map((result) => {
        const { videoId } = result.id;

        return (
          <SearchResultItem key={videoId} result={result} />
        );
      })}
    </SearchResultsList>
  );
};

export default SearchResults;
