import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const dispatch = useAppDispatch();
  const history = useHistory();
  const onCreate = () => {
    history.push('/create');
  };
  const onRefresh = () => {
    dispatch(asyncFetchTodos({}) as any);
  }
  const todos = useAppSelector(selectStateTodos);
  const isFetching = useAppSelector(selectStateIsFetchingTodos);
  return (
    <div>
      <h4 className={style.title}>TODOS 列表页</h4>
      <div>
        <button onClick={onRefresh}>刷新</button>
        <button onClick={onCreate}>创建</button>
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

