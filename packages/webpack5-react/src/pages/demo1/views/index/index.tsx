import React, { FunctionComponent } from 'react';
import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFetchTodosCreator } from '../../store/action-creators';
import type { AppState } from '../../../../types/state';

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

function ViewIndex(props: Props) {
  const history = useHistory();
  const onCreate = () => {
    history.push('/create');
  };
  return (
    <div>
      <h4 className={style.title}>TODOS 列表页</h4>
      <div>
        <button onClick={props.getTodos}>刷新</button>
        <button onClick={onCreate}>创建</button>
      </div>
      {props.isFetching ? (
        <div>正在请求数据...</div>
      ) : (
        <ul className={style['todo-list']}>
          {props.todos.map((todo, index) => (
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

const mapStateToProps = (state: AppState) => {
  return {
    todos: state.todos,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    getTodos() {
      dispatch(getFetchTodosCreator());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewIndex) as FunctionComponent;
