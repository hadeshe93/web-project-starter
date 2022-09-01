import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { lockPageScroll } from '../../utils/browser';

import styles from './index.module.css';

const Modal = (props) => {
  useEffect(() => {
    const unlockPageScroll = lockPageScroll();
    return unlockPageScroll;
  }, []);
  const root = (
    <div className={styles['modal-wrapper']}>
      <div className={styles['modal-mask']}></div>
      <div className={styles.modal}>
        {props.children}
        <div>
          <button onClick={props.close}>关闭</button>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(root, document.querySelector('body'));
};

export default Modal;
