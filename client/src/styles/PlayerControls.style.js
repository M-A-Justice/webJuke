import styled, { keyframes } from 'styled-components';

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
`;

export const VolumeContainer = styled.div`
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
    border-left: 100vw solid #577399;
  }
`;

export const Slider = styled.div`
  height: 5px;
  width: 5px;
  background-color: white;
  animation: ${({ played }) => slider(played)} ${({ duration, playedSeconds }) => Math.floor(duration - playedSeconds)}s linear;
  animation-play-state: ${({ isPlaying }) => (isPlaying === true ? 'running' : 'paused')}
`;

export const Play = styled.button`
  box-sizing: border-box;
  width: 74px;
  height: 74px;
  border-style: solid;
  border-width: 37px;
  border-width: 37px 0px 37px 74px;
  border-color: transparent transparent transparent #577399;
  background-color: transparent;
  margin-left: 65%;
`;

export const Pause = styled.button`
  width: 74px;
  height: 74px;
  border-style: double;
  border-width: 0px 0px 0px 74px;
  border-color: #577399;
  background-color: transparent;
  margin-left: 65%;
`;
