import styled, { keyframes } from 'styled-components';

export const DurationContainer = styled.div`
`;

export const DurationTime = styled.div`
  background-color: #BDD5EA;
  font-family: 'Roboto';
  font-size: 2.5vh;
  color: #495867;
  text-shadow: 1px 1px 3px darkslategrey;
  padding-left: 10px;
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

// This is to attempt to fix a bug where durationSlider has over 200 classes generated for it

// const animation = (props) => css`
//     ${slider(props.played)} ${Math.floor(props.duration - props.playedSeconds)}s linear
//   `;

// export const DurationSlider = styled.div.attrs(() => ({
//   style: {
//     animation,
//   },
// }))`
//   height: 5px;
//   width: 5px;
//   background-color: white;
//   animation-play-state: ${({ isPlaying }) => (isPlaying === true ? 'running' : 'paused')}
// `;

export const DurationSlider = styled.div`
  height: 5px;
  width: 5px;
  background-color: white;
  animation: ${({ played }) => slider(played)} ${({ duration, playedSeconds }) => Math.floor(duration - playedSeconds)}s linear;
  animation-play-state: ${({ isPlaying }) => (isPlaying === true ? 'running' : 'paused')}
`;
