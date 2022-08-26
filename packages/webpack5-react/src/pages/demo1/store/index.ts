import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducers } from './reducers';

import type { ActionTypes } from './action-types';
import type { AppState } from '../../../types/state';

type Action = {
  type: ActionTypes;
  [key: string]: any;
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore<AppState, Action, {}, {}>(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
