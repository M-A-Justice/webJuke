/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
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

import { showModal, addToQueue } from '../actions/index';

const SearchResultItem = ({ result }) => {
  const dispatch = useDispatch();
  const { videoId } = result.id;
  const { title } = result.snippet;

  const handleShowModal = (e) => {
    const exclude = e.target.className;
    if (typeof exclude !== 'object') {
      if (!exclude.includes('dont-display')) {
        dispatch(showModal());
      }
    }
  };

  const addIdToQueue = () => {
    dispatch(addToQueue(videoId));
  };

  return (
    <SearchResultListItem>
      <ResultItemContainer href="#" onClick={handleShowModal}>
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
          <QueueButton onClick={addIdToQueue} className="dont-display">
            <QueueButtonIcon className="dont-display" />
          </QueueButton>
        </QueueButtonContainer>
      </ResultItemContainer>
    </SearchResultListItem>
  );
};

export default SearchResultItem;
