import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../actions/index';
import {
  ModalBackdrop,
  ModalBody,
} from '../styles/Modal.style';

const Modal = () => {
  const dispatch = useDispatch();
  const displayModal = useSelector((state) => state.showModal);

  const handleClick = (e) => {
    const close = e.target.className;
    if (close.includes('close-modal')) {
      dispatch(showModal());
    }
  };

  if (displayModal) {
    return (
      <ModalBackdrop onClick={handleClick} className="close-modal">
        <ModalBody />
      </ModalBackdrop>
    );
  }
  return (
    <div />
  );
};

export default Modal;
