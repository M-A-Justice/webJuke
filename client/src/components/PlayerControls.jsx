/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Audio,
  ControlsContainer,
  DurationSlider,
  DurationContainer,
  ButtonsContainer,
  VolumeContainer,
  SliderContainer,
  Slider,
  Play,
  Pause,
} from '../styles/PlayerControls.style';
import {
  isPlaying,
} from '../actions/index';

const PlayerControls = () => {
  const dispatch = useDispatch();
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

  const handlePlayPause = () => {
    dispatch(isPlaying());
  };

  return (
    <Audio>
      <DurationSlider>
        <SliderContainer>
          <Slider played={percentage} duration={duration} playedSeconds={playedSeconds} isPlaying={isPlayingBool} />
        </SliderContainer>
        <DurationContainer>
          {`${formatTime(typeof playedSeconds !== 'number' ? 0 : Math.floor(playedSeconds))}/${formatTime(Math.floor(duration))}`}
        </DurationContainer>
      </DurationSlider>
      <ControlsContainer>
        <ButtonsContainer>
          {isPlayingBool === true ? <Pause onClick={handlePlayPause} /> : <Play onClick={handlePlayPause} />}
        </ButtonsContainer>
        <VolumeContainer />
      </ControlsContainer>
    </Audio>
  );
};

export default PlayerControls;
