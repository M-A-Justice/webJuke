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
  Playing,
  Paused,
  Muted,
  HighVolume,
  LowVolume,
  Silent,
  VolumeControl,
} from '../styles/PlayerControls.style';
import {
  isPlaying,
  muteVolume,
  unmuteVolume,
} from '../actions/index';

const PlayerControls = () => {
  const dispatch = useDispatch();
  const duration = useSelector((state) => state.duration);
  const currentTime = useSelector((state) => state.currentTime);
  const isPlayingBool = useSelector((state) => state.isPlaying);
  const { volume, muted } = useSelector((state) => state.volume);
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

  const handleMuteUnmute = () => {
    if (volume === 0 && muted) {
      dispatch(muteVolume());
    } else {
      dispatch(unmuteVolume());
    }
  };

  let volumeIcon;

  if (muted) {
    volumeIcon = <Muted onClick={handleMuteUnmute} />;
  } else if (volume === 0 && !muted) {
    volumeIcon = <Silent onClick={handleMuteUnmute} />;
  } else if (volume > 0 && volume <= 50 && !muted) {
    volumeIcon = <LowVolume onClick={handleMuteUnmute} />;
  } else if (volume > 50 && !muted) {
    volumeIcon = <HighVolume onClick={handleMuteUnmute} />;
  }

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
          {isPlayingBool === true ? <Paused onClick={handlePlayPause} /> : <Playing onClick={handlePlayPause} />}
        </ButtonsContainer>
        <VolumeContainer>
          {volumeIcon}
          <VolumeControl type="range" min="0" max="1" step="any" />
        </VolumeContainer>
      </ControlsContainer>
    </Audio>
  );
};

export default PlayerControls;
