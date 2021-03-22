/* eslint-disable react/prop-types */
import React from 'react';
import SearchResultListItem from '../styles/SearchResultItem.style';

const SearchResultItem = ({ result }) => {
  // const { videoId } = result.id;
  const { title } = result.snippet;

  return (
    <SearchResultListItem>
      {title}
    </SearchResultListItem>
  );
};

export default SearchResultItem;
