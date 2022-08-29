import React from 'react';
import { useHistory } from "react-router-dom";
import { createTodo } from '../../store/todos';
import { useAppDispatch } from '../../store/index';

import style from './index.module.scss';

export default function ViewCreate(props) {
  const history = useHistory();
  const onBack = () => {
    history.goBack();
  };
  const dispatch = useAppDispatch();
  const onCreate = () => {
    const now = new Date().getTime();
    dispatch(createTodo({
      content: `内容 ${now}`,
      creator: 'hadeshe',
      lastModifier: 'hadeshe',
      createdAt: now,
      updatedAt: now,
    }));
  }
  return <div>
    <h4 className={style.title}>CREATE VIEW</h4>
    <div>
      <button onClick={onCreate}>新增</button>
      <button onClick={onBack}>返回</button>
    </div>
  </div>;
}

