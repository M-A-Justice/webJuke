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

import {
  showModal,
  addToQueue,
  isActive,
  activeSearch,
  isPlaying,
} from '../actions/index';

const SearchResultItem = ({ result }) => {
  const dispatch = useDispatch();
  const queue = useSelector((state) => state.queue);
  const isActiveQueue = useSelector((state) => state.isActive);

  // introduce a regex expression or an algorithm to parse the true title/artist name

  // first check if channel name is the same as users search.
  // this will check if the user searched an artist.
  // if that same string is in the title it can be removed.
  // this will leave the song name with possibly a feature name in parenthesis
  // and possibly parenthesis including official audio/video/music video.
  // that can also be removed and used to display the video on the player

  // const { videoId } = result.id;
  const { title } = result.snippet;

  const handleShowModal = () => {
    dispatch(showModal());
  };

  const addIdToQueue = () => {
    dispatch(showModal());
    dispatch(addToQueue(result));
    if (queue.length === 0) {
      dispatch(isActive());
      dispatch(isPlaying());
    } else if (isActiveQueue) {
      dispatch(activeSearch());
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
