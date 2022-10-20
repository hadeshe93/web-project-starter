import React, { useEffect, useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import { lockPageScroll } from '../../utils/browser';

import styles from './index.module.css';

export const ModalContext = createContext({
  state: '',
});

const Modal = (props) => {
  useEffect(() => {
    const unlockPageScroll = lockPageScroll();
    return unlockPageScroll;
  }, []);
  const [modalContextValue, setModalContextValue] = useState({
    state: '',
  });
  const createOnClose = (closeCallback: Function) => () => {
    setModalContextValue({
      state: 'closed',
    });
    closeCallback();
  };
  const root = (
    <ModalContext.Provider value={modalContextValue}>
      <div className={styles['modal-wrapper']}>
        <div className={styles['modal-mask']}></div>
        <div className={styles.modal}>
          {props.children}
          <div>
            <button onClick={createOnClose(props.close)}>关闭</button>
          </div>
        </div>
      </div>
    </ModalContext.Provider>
  );
  return ReactDOM.createPortal(root, document.querySelector('body'));
};

export default Modal;
