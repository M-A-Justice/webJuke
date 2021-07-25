/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  DurationContainer,
  DurationTime,
  SliderContainer,
  DurationSlider,
} from '../styles/Duration.style';

const Duration = () => {
  const duration = useSelector((state) => state.duration);
  const currentTime = useSelector((state) => state.currentTime);
  const isPlayingBool = useSelector((state) => state.isPlaying);
  const { playedSeconds, played } = currentTime;

  let percentage = 0;
  if (typeof played === 'number') {
    percentage = Math.floor(played * 100);
  }

  const formatTime = (time) => `
    ${Math.floor(time / 60)}:${(time % 60).toString().length > 1 ? (time % 60) : '0'.concat((time % 60).toString())}
  `;

  return (
    <DurationContainer>
      <SliderContainer>
        <DurationSlider played={percentage} duration={duration} playedSeconds={playedSeconds} isPlaying={isPlayingBool} />
      </SliderContainer>
      <DurationTime>
        {`${formatTime(typeof playedSeconds !== 'number' ? 0 : Math.floor(playedSeconds))}/${formatTime(Math.floor(duration))}`}
      </DurationTime>
    </DurationContainer>
  );
};

export default Duration;
