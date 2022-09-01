import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header';
import Modal from '../../components/modal';
import { asyncFetchTodos, selectStateTodos, selectStateIsFetchingTodos } from '../../store/todos';
import { useAppDispatch, useAppSelector } from '../../store/index';

import style from './index.module.scss';

interface Todo {
  content: string;
  creator: string;
  lastModifier: string;
  createdAt: number;
  updatedAt: number;
}
interface Props {
  todos: Todo[];
  isFetching: boolean;
  getTodos: () => void;
}

export default function ViewIndex(props: Props) {
  const [showModal, setShowMoal] = useState(false);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const onCreate = () => {
    history.push('/create');
  };
  const onRefresh = () => {
    dispatch(asyncFetchTodos({}) as any);
  }
  const onShowModal = () => {
    setShowMoal(true);
  }
  const onCloseModal = () => {
    setShowMoal(false);
  }
  const todos = useAppSelector(selectStateTodos);
  const isFetching = useAppSelector(selectStateIsFetchingTodos);
  return (
    <div>
       <Header title="列表页"></Header>
       {
          showModal ? <Modal close={onCloseModal}>Modal</Modal> : null
       }
      <div>
        <button onClick={onRefresh}>刷新</button>
        <button onClick={onCreate}>创建</button>
        <button onClick={onShowModal}>弹窗</button>
      </div>
      {isFetching ? (
        <div>正在请求数据...</div>
      ) : (
        <ul className={style['todo-list']}>
          {todos.map((todo, index) => (
            <li key={index} className={style['todo-item']}>
              <div className={style.col}>{todo.content}</div>
              <div className={style.col}>{todo.lastModifier}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

