import styled from 'styled-components';
import {
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp,
} from '@styled-icons/material-sharp';
import { Slider } from '@material-ui/core';

export const VolumeContainer = styled.div`
`;

export const Muted = styled(VolumeOff)`
  height: 55px;
  color: #577399;
  filter: drop-shadow(2px 2px 2px darkslategrey);
`;

export const HighVolume = styled(VolumeUp)`
  height: 55px;
  color: #577399;
  filter: drop-shadow(2px 2px 2px darkslategrey);
`;

export const LowVolume = styled(VolumeDown)`
  height: 55px;
  color: #577399;
  filter: drop-shadow(2px 2px 2px darkslategrey);
`;

export const Silent = styled(VolumeMute)`
  height: 55px;
  color: #577399;
  filter: drop-shadow(2px 2px 2px darkslategrey);
`;

export const VolumeSlider = styled(Slider)`
`;
