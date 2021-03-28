import React from 'react';
import { useSelector } from 'react-redux';
import {
  PlayerInfoContainer,
  NowPlaying,
  Upcoming,
} from '../styles/PlayerInfo.style';
import NoDisplay from '../styles/NoDisplay.style';

// This component needs to conditionally display the queue after the queue
// contains 2 or more items

// this should be done by displaying grid when queue should be active and flex
// when the queue is inactive

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
