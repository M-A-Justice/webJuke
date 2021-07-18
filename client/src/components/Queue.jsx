import React from 'react';
import { useSelector } from 'react-redux';
import QueueContainer from '../styles/Queue.style';
import QueueItem from './QueueItem';

const Queue = () => {
  const queue = useSelector((state) => state.queue);
  const upcoming = queue.slice(1);

  return (
    <QueueContainer>
      {upcoming.map((song) => {
        const { videoId } = song.id;
        return (
          <QueueItem key={videoId} song={song} />
        );
      })}
    </QueueContainer>
  );
};

export default Queue;
