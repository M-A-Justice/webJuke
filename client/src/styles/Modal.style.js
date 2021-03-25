import styled from 'styled-components';
import { Close } from '@styled-icons/evaicons-solid/';

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

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 9%;
`;

export const ModalCloseContainer = styled.a`
  text-decoration: none;
  height: 100%
`;

export const ModalClose = styled(Close)`
  color: #577399;
  height: 100%;
`;
