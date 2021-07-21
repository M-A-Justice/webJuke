import styled, { keyframes } from 'styled-components';
import { Pause } from '@styled-icons/material';
import { Play } from '@styled-icons/foundation';
import {
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp,
} from '@styled-icons/material-sharp';

export const Audio = styled.div`
`;

export const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr;
  background-color: #BDD5EA;
  height: 100%;
`;

export const DurationSlider = styled.div`
`;

export const DurationContainer = styled.div`
  background-color: #BDD5EA;
  font-family: 'Roboto';
  font-size: 2.5vh;
  color: #495867;
  text-shadow: 1px 1px 3px darkslategrey;
  padding-left: 10px;
`;

export const ButtonsContainer = styled.div`
  height: 1%;
`;

export const VolumeContainer = styled.div`
  height: 1%;
`;

export const SliderContainer = styled.div`
  height: 5px;
  background-color: #495867;
`;

const slider = (played) => keyframes`
  0% {
    border-left: ${played}vw solid #577399;
  }
  100% {
    border-left: 99vw solid #577399;
  }
`;

export const Slider = styled.div`
  height: 5px;
  width: 5px;
  background-color: white;
  animation: ${({ played }) => slider(played)} ${({ duration, playedSeconds }) => Math.floor(duration - playedSeconds)}s linear;
  animation-play-state: ${({ isPlaying }) => (isPlaying === true ? 'running' : 'paused')}
`;

// export const Play = styled.button`
//   box-sizing: border-box;
//   width: 74px;
//   height: 74px;
//   border-style: solid;
//   border-width: 37px 0px 37px 74px;
//   border-color: transparent transparent transparent #577399;
//   background-color: transparent;
//   filter: drop-shadow(2px 2px 2px darkslategrey);
//   margin-left: 63%;
// `;

// export const Pause = styled.button`
//   width: 74px;
//   height: 74px;
//   border-style: double;
//   border-width: 0px 0px 0px 74px;
//   border-color: #577399;
//   background-color: transparent;
//   filter: drop-shadow(2px 2px 2px darkslategrey);
//   margin-left: 63%;
// `;

export const Playing = styled(Play)`
  height: 55px;
  color: #577399;
  filter: drop-shadow(2px 2px 2px darkslategrey);
`;

export const Paused = styled(Pause)`
  height: 55px;
  color: #577399;
  filter: drop-shadow(2px 2px 2px darkslategrey);
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

export const VolumeControl = styled.input`
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 2px 2px 2px #2F4F4F;
    background: #3071A9;
    border-radius: 5px;
    border: 0px solid #000000;
  }

  &::-webkit-slider-thumb {
    box-shadow: 2px 2px 2px #2F4F4F;
    border: 0px solid #000000;
    height: 30px;
    width: 30px;
    border-radius: 30px;
    background: #577399;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
  }
`;
