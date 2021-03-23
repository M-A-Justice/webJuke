/* eslint-disable react/prop-types */
import React from 'react';
import {
  SearchResultListItem,
  ResultItemContainer,
  ResultImageContainer,
  ResultImage,
  ResultInfoContainer,
  ResultInfoLeft,
  ResultInfoRight,
  QueueButtonContainer,
  QueueButton,
  QueueButtonIcon,
} from '../styles/SearchResultItem.style';

const SearchResultItem = ({ result }) => {
  // const { videoId } = result.id;
  const { title } = result.snippet;

  return (
    <SearchResultListItem>
      <ResultItemContainer href="#">
        <ResultImageContainer>
          <ResultImage />
        </ResultImageContainer>
        <ResultInfoContainer>
          <ResultInfoLeft>
            {title}
          </ResultInfoLeft>
          <ResultInfoRight />
        </ResultInfoContainer>
        <QueueButtonContainer>
          <QueueButton>
            <QueueButtonIcon />
          </QueueButton>
        </QueueButtonContainer>
      </ResultItemContainer>
    </SearchResultListItem>
  );
};

export default SearchResultItem;
