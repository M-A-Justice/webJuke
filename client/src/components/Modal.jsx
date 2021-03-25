import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../actions/index';
import {
  ModalBackdrop,
  ModalBody,
  ModalCloseContainer,
  ModalClose,
  ModalHeader,
} from '../styles/Modal.style';

const Modal = () => {
  const dispatch = useDispatch();
  const displayModal = useSelector((state) => state.showModal);

  const handleClick = (e) => {
    const { target } = e;
    const { className } = e.target;

    if (typeof className === 'object') {
      if (target.getAttribute('data-name').includes('close')) {
        dispatch(showModal());
      }
    } else if (className.includes('close')) {
      dispatch(showModal());
    }
  };

  if (displayModal) {
    return (
      <ModalBackdrop onClick={handleClick} className="close">
        <ModalBody>
          <ModalHeader>
            <ModalCloseContainer onClick={handleClick} className="close" href="#">
              <ModalClose onClick={handleClick} className="close" />
            </ModalCloseContainer>
          </ModalHeader>
        </ModalBody>
      </ModalBackdrop>
    );
  }
  return (
    <div />
  );
};

export default Modal;
