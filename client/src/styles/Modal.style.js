import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180%;
  width: 100%;
  background-color: rgba(189, 213, 234, 0.5);
  position: absolute;
  backdrop-filter: blur(15px);
`;

export const ModalBody = styled.div`
  height: 43%;
  width: 67%;
  background-color: #F7F7FF;
  margin-top: 40%;
`;
