import React, { useContext } from 'react';
import { FaTimes, Fatimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

function Modal() {
  const { isOpenModal, closeModal } = useGlobalContext();
  return (
    <>
      <div>
        <div className={`${isOpenModal ? 'modal show-modal' : 'modal'}`}>
          <div className='modal-container'>
            <div className='inside-modal-container'>
              <h2>hello Wira</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                cumque repellat porro, eligendi repellendus alias!
              </p>
            </div>
            <button className='close-btn' onClick={closeModal}>
              <FaTimes />
            </button>
          </div>
          <ul className='links'></ul>
        </div>
      </div>
    </>
  );
}

export default Modal;
