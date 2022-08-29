import { Dispatch } from 'redux';
import { SET_IS_FETCHING, SET_TODOS, CREATE_TODO } from './action-types';

export const getSetIsFetchingCreator = (isFetching = false) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

export const getSetTodosCreator = (todos = []) => ({
  type: SET_TODOS,
  todos,
});

export const getCreateTodoCreator = (todo) => ({
  type: CREATE_TODO,
  todo,
});

export const getFetchTodosCreator = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getSetIsFetchingCreator(true));
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    dispatch(getSetTodosCreator([]));
    dispatch(getSetIsFetchingCreator(false));
  };
};