import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, Todos } from '../../../types/state';

interface TodosState {
  list: Todos;
  isFetching: boolean;
}

const initialState: TodosState = {
  list: [],
  isFetching: false,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo(state, action: PayloadAction<Todo>) {
      state.list.push(action.payload);
    },
    setTodos(state, action: PayloadAction<Todos>) {
      state.list.splice(0, state.list.length, ...action.payload);
    },
    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
  },
});
export default todosSlice;

export const { createTodo, setTodos, setIsFetching } = todosSlice.actions;

// 模拟拉取 todos
export const asyncFetchTodos = (params: any) => async (dispatch) => {
  dispatch(setIsFetching(true));
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(params);
  const todos = [{
    content: `拉取的内容`,
    creator: 'hadeshe',
    lastModifier: 'hadeshe',
    createdAt: +new Date(),
    updatedAt: +new Date(),
  }];
  dispatch(setTodos(todos));
  dispatch(setIsFetching(false));
}

// 检出指定的 state
export const selectStateTodos = (state: { todos: TodosState, [key: string]: any }) => state.todos.list;
export const selectStateIsFetchingTodos = (state: { todos: TodosState, [key: string]: any }) => state.todos.isFetching;