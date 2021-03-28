import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import InvisiblePlayer from '../styles/Player.style';
import NoDisplay from '../styles/NoDisplay.style';
import {
  getDuration,
  removeFromQueue,
  isActive,
  initSearch,
  emptySearchResults,
  isPlaying,
} from '../actions/index';

const Player = () => {
  const dispatch = useDispatch();
  const queue = useSelector((state) => state.queue);
  const isCurrentlyPlaying = useSelector((state) => state.isPlaying);
  const currentSong = `https://www.youtube.com/watch?v=${queue[0]}`;

  const handleDuration = (duration) => {
    dispatch(getDuration(duration));
  };

  const handleEnded = () => {
    dispatch(removeFromQueue());
    if (queue.length === 1) {
      dispatch(isActive());
      dispatch(emptySearchResults());
      dispatch(isPlaying());
      dispatch(initSearch());
    }
  };

  if (queue[0] === undefined) {
    return (
      <NoDisplay />
    );
  }
  return (
    <InvisiblePlayer>
      <ReactPlayer
        url={currentSong}
        playing={isCurrentlyPlaying}
        height="0%"
        width="0%"
        onDuration={handleDuration}
        onEnded={handleEnded}
      />
    </InvisiblePlayer>
  );
};

export default Player;
