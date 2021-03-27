/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import { showModal, addToQueue, isActive } from '../actions/index';

const SearchResultItem = ({ result }) => {
  const dispatch = useDispatch();
  const queue = useSelector((state) => state.queue);
  // const activeQueue = useSelector((state) => state.isActive);
  const { videoId } = result.id;
  const { title } = result.snippet;

  const handleShowModal = () => {
    dispatch(showModal());
  };

  const addIdToQueue = () => {
    dispatch(showModal());
    dispatch(addToQueue(videoId));
    if (queue.length === 0) {
      dispatch(isActive());
    }
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
