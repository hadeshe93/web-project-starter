// import { merge } from 'lodash';
import { combineReducers } from 'redux';
import { CREATE_TODO, SET_TODOS, SET_IS_FETCHING } from './action-types';
import { getSetIsFetchingCreator, getSetTodosCreator, getCreateTodoCreator } from './action-creators';

import type { Todos, IsFetching } from '../../../types/state';

const INITIAL_TODOS_STATE: Todos = [];
export const todosReducer = (state = INITIAL_TODOS_STATE, action: ReturnType<typeof getSetTodosCreator> & ReturnType<typeof getCreateTodoCreator>) => {
  if (action.type === SET_TODOS) {
    return [].concat(state, action.todos);
  }
  if (action.type === CREATE_TODO) {
    console.log('CREATE_TODO: ', state, action);
    return [].concat(state, [action.todo]);
  }
  return state;
};

const INITIAL_IS_FETCHING_STATE: IsFetching = false;
export const isFetchingReducer = (state = INITIAL_IS_FETCHING_STATE, action: ReturnType<typeof getSetIsFetchingCreator>) => {
  if (action.type === SET_IS_FETCHING) {
    return action.isFetching;
  }
  return state;
};


export const reducers = combineReducers({
  todos: todosReducer,
  isFetching: isFetchingReducer,
});
