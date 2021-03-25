import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: ${({ init }) => (init === false ? 'inline' : 'grid')};
  grid-template-rows: ${({ init }) => (init === false ? 'none' : '3fr 10fr 2fr')};
`;

export default Container;
