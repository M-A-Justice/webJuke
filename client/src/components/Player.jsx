import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import InvisiblePlayer from '../styles/Player.style';

const Player = () => {
  const queue = useSelector((state) => state.queue);
  const currentSong = `https://www.youtube.com/watch?v=${queue[0]}`;

  return (
    <InvisiblePlayer>
      <ReactPlayer url={currentSong} />
    </InvisiblePlayer>
  );
};

export default Player;
