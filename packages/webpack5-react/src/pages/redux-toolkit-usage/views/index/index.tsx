import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import WithProfiler from '../../components/with-profiler';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Condition from '../../components/base/condition';
import Modal from '../../components/modal';
import Counter from '../../components/counter';
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
  };
  const onShowModal = useCallback(() => {
    setShowMoal(true);
  }, []);
  const onCloseModal = useCallback(() => {
    setShowMoal(false);
  }, []);
  const todos = useAppSelector(selectStateTodos);
  const isFetching = useAppSelector(selectStateIsFetchingTodos);

  return (
    <div>
      <WithProfiler id="header">
        <Header title="列表页"></Header>
      </WithProfiler>
      <Condition if={showModal}>
        <Modal close={onCloseModal}>Modal</Modal>
      </Condition>
      <div>
        <button onClick={onRefresh}>刷新</button>
        <button onClick={onCreate}>创建</button>
        <button onClick={onShowModal}>弹窗</button>
      </div>
      <Condition show={isFetching}>
        <span style={{ color: 'blue' }}>条件显示或隐藏</span>
        <span style={{ color: 'blue' }}>条件显示或隐藏</span>
      </Condition>
      <Condition if={isFetching}>
        <div>正在请求数据...</div>
      </Condition>
      <Condition if={!isFetching}>
        <ul className={style['todo-list']}>
          {todos.map((todo, index) => (
            <li key={index} className={style['todo-item']}>
              <div className={style.col}>{todo.content}</div>
              <div className={style.col}>{todo.lastModifier}</div>
            </li>
          ))}
        </ul>
      </Condition>
      <Counter></Counter>
      <Footer text="脚注"></Footer>
    </div>
  );
}
