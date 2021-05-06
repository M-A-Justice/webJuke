import React from 'react';
import { useSelector } from 'react-redux';
import {
  PlayerInfoContainer,
  NowPlaying,
} from '../styles/PlayerInfo.style';
import Upcoming from './Upcoming';
import NoDisplay from '../styles/NoDisplay.style';

// This component requires a song object
// To give this component the appropriate data I will need to refactor my queue to be
// an array of objects rather than an array of strings/id's

const PlayerInfo = () => {
  const queue = useSelector((state) => state.queue);
  const queueNum = queue.length;

  return (
    <PlayerInfoContainer queue={queueNum}>
      <NowPlaying />
      {queueNum > 1 ? <Upcoming /> : <NoDisplay />}
    </PlayerInfoContainer>
  );
};

export default PlayerInfo;
