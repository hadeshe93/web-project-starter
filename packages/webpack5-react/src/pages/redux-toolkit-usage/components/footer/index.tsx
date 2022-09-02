import React, { memo } from 'react';
import styles from './index.module.css';

interface Props {
  text: string;
}

export default memo(function Footer(props: Props) {
  console.log('脚注渲染');
  return <div className={styles.footer}>{props.text}</div>
});