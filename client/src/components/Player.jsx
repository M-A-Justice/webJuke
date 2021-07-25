import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import InvisiblePlayer from '../styles/Player.style';
import NoDisplay from '../styles/NoDisplay.style';
import {
  getDuration,
  getPlayedTime,
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
  const { volume } = useSelector((state) => state.volume);
  const videoId = typeof queue[0] === 'object' ? queue[0].id.videoId : undefined;
  const currentSong = `https://www.youtube.com/watch?v=${videoId}`;

  const handleDuration = (duration) => {
    dispatch(getDuration(duration));
  };

  const handleProgress = (state) => {
    dispatch(getPlayedTime(state));
  };

  const handleEnded = () => {
    dispatch(removeFromQueue());
    if (queue.length === 1) {
      dispatch(isActive());
      dispatch(emptySearchResults());
      dispatch(isPlaying());
      dispatch(initSearch());
      dispatch(getDuration(0));
    }
  };

  if (videoId === undefined) {
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
        volume={volume / 100}
        onDuration={handleDuration}
        onProgress={handleProgress}
        onEnded={handleEnded}
      />
    </InvisiblePlayer>
  );
};

export default Player;
