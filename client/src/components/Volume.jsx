import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  VolumeContainer,
  Muted,
  HighVolume,
  LowVolume,
  Silent,
  VolumeSlider,
} from '../styles/Volume.style';
import {
  muteVolume,
  unmuteVolume,
  updateVolume,
} from '../actions/index';

const Volume = () => {
  const dispatch = useDispatch();
  const { volume, muted } = useSelector((state) => state.volume);

  const handleMuteUnmute = () => {
    if (volume === 0 && muted) {
      dispatch(muteVolume());
    } else {
      dispatch(unmuteVolume());
    }
  };

  const handleChange = (event, newValue) => {
    if (!muted) {
      dispatch(updateVolume(newValue));
    } else {
      dispatch(updateVolume(volume));
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
    <VolumeContainer>
      {volumeIcon}
      <VolumeSlider value={volume} min={0} max={100} aria-labelledby="continuous-slider" onChange={handleChange} />
    </VolumeContainer>
  );
};

export default Volume;
