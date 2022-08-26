export interface Todo {
  content: string;
  creator: string;
  lastModifier: string;
  createdAt: number;
  updatedAt: number;
}

export type Todos = Todo[];

export type IsFetching = boolean;

export interface AppState {
  todos: Todos;
  isFetching: IsFetching;
};
